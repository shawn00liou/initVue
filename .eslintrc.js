module.exports = {
  root: true,

  parserOptions: {
    //parser: 'babel-eslint',
    "parser": "@typescript-eslint/parser",
    sourceType: 'module'
    // "ecmaFeatures":{
    //   "legacyDecorators":true
    // }
  },

  env: {
    browser: true
  },

  extends: [
    'eslint:recommended',//site貼過來的
    'plugin:@typescript-eslint/eslint-recommended',//site貼過來的
    'plugin:@typescript-eslint/recommended',//site貼過來的
    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/essential'// Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended' // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended' // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
  ],

  // required to lint *.vue files
  plugins: [
    "@typescript-eslint",//site貼過來的
    'vue'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',//site貼過來的
    //"no-use-before-define": 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-unused-vars':'off'
  }
}
