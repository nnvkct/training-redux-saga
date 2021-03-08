module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 1,
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 1,
    'no-unused-vars': 1,
    'react/prefer-stateless-function': 1,
    'import/extensions': 1,
    'import/prefer-default-export': 'off',
  },
};