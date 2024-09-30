# tree-sitter-example
to create ASTs in go programming language 

Check if you have node installed or not , use below commands to confirm it.

`node -v`
`npm -v`

If not installed check [here](https://nodejs.org/en/download/package-manager) 

Set up npm packages to be used in the directory where parse-git-repo.js is present.

`npm init -y`

`npm install tree-sitter tree-sitter-go`

`npm install simple-git`

Run below - 
`node parse-git-repo.js`
output will be like - 

`Repository already exists. Pulling the latest changes...
Repository updated successfully.
AST for tools.go:
(source_file (comment) (comment) (comment) (comment) (package_clause (package_identifier)) (import_declaration (import_spec_list (import_spec name: (blank_identifier) path: (interpreted_string_literal)) (import_spec name: (blank_identifier) path: (interpreted_string_literal)) (import_spec name: (blank_identifier) path: (interpreted_string_literal)))))`


