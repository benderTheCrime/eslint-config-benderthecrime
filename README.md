## benderTheCrime ESLint Config
### Usage
Add this to your project and your code will thank you:

```
  "extends": "benderTheCrime",
  "rules": {
    ...
  }
```

You will also need the `eslint-config-google` package, from which this config
inherits as well as the `babel-eslint` package, which this package uses as its
parser:

```
npm i --save-dev eslint-config-google babel-eslint
```