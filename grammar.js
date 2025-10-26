/**
 * @file bogoscript isn't the scratch transpiler
 * @author faretek <r@faretek.dev>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "bogoscript",
  extras: $ => [
    /\s/,
    $.comment_line,
    $.comment_block,
  ],
  rules: {
    source_file: $ => repeat(
      $.statement
    ),
    statement: $ => choice(
      $.statement_print_str
    ),
    statement_print_str: $ => seq("print_str", $.expression, ";"),
    expression: $ => choice($.literal),

    literal: $ => choice($.literal_number, $.literal_string),
    literal_number: $ => /\d+/,
    literal_string: $ => seq(
      '"', repeat($.string_char), token.immediate('"')
    ),
    string_char: $ => choice(
      /[^\\\n]/, // anything that isn't a backslash or newline
      seq("\\", choice(
        "\\",
        "n",
        "\"",
        "'",
        "b",
        "f",
        "r",
        "t",
        seq("u", $.hexdigit, $.hexdigit, $.hexdigit, $.hexdigit)))
    ),

    comment_line: $ => seq("#", /[^\n]*/),
    comment_block: $ => seq("##",
      token.immediate(repeat(choice(/[^#]/, /#[^#]/))), // thanks mr ai...
      token.immediate("##")),

    letter: $ => token.immediate(/[A-z]/),
    hexdigit: $ => token.immediate(/[0-9a-fA-F]/),
    digit: $ => token.immediate(/[0-9]/),
  }
});
