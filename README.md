# utils

Utility functions that we commonly use from lodash or other utility libraries such as async (https://www.npmjs.com/package/async)

Packages Available :

    1. Debounce

## Development

`npm install` or `yarn install`

We have followed prettier rules for coding style with few custom config. For eg.

```javascript
// Use single quotes
let str = 'double-quote'; // wrong

let str = 'single-quote'; // right
```

```javascript
// Semi-colons
let str = 'no-semi'; // wrong

let str = 'semi'; // right
```

```javascript
// Trailing Comma
let obj = {
  name: 'John Doe',
}; // wrong

let obj = {
  name: 'John Doe',
}; // right
```

Although, it will get automatically fixed when you try to commit, but if you want to watch those file changes you need to add plugins to your respective editors, [given here](https://prettier.io/docs/en/editors.html). After adding the plugin, change the configuration to auto-fix after save.

## Contributing

Please ensure your pull request adheres to the following guidelines:

- Alphabetize your entry.
- Search previous suggestions before making a new one, as yours may be a duplicate.
- Suggested READMEs should be beautiful or stand out in some way.
- Make an individual pull request for each suggestion.
- New categories, or improvements to the existing categorization are welcome.
- Keep descriptions short and simple, but descriptive.
- Start the description with a capital and end with a full stop/period.
- Check your spelling and grammar.

Thank you for your suggestions!
