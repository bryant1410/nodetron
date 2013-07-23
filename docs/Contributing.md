# Contributing

1. Fork and branch; open an issue before sending a pull request.
    * Reference the issue you are closing/resolving in your commit message.

2. Indent with two spaces (mandatory).

3. Follow these other guidelines (we're not terribly strict about some of these, particularly the syntax ones):

### Guidelines

1. `function()`, not `function ()`
2. `if()`, not `if ()`, same for `for`, `switch`, `while`, etc.
3. Don't do `} else {`
4. `// comment`, not `//comment`
6. `key: value`, not `key:value`
7. Document public (meant-for-user-consumption) methods with JSDoc.
8. Throw exceptions only when the error is obviously the fault of the developer (i.e. bad initialization input). Don't throw exceptions when the fault might be bad end-user input.
9. Public method names should be terse, concise, and short. Private method names should tend towards verbosity/descriptiveness.
