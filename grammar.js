/**
 * @file bogoscript isn't the scratch transpiler
 * @author faretek <r@faretek.dev>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "bogoscript",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
