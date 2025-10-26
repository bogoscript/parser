import XCTest
import SwiftTreeSitter
import TreeSitterBogoscript

final class TreeSitterBogoscriptTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_bogoscript())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading bogoscript grammar")
    }
}
