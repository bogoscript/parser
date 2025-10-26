package tree_sitter_bogoscript_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_bogoscript "github.com/bogoscript/parser/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bogoscript.Language())
	if language == nil {
		t.Errorf("Error loading bogoscript grammar")
	}
}
