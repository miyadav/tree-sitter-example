const Parser = require('tree-sitter');
const Go = require('tree-sitter-go');

const parser = new Parser();
parser.setLanguage(Go);

const sourceCode = `package main

func main() {
  println("Hello, world!")
}`;

const tree = parser.parse(sourceCode);
console.log(tree.rootNode.toString());

