module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'class-methods-use-this': 0,
    },
  };
  