module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    'react/prop-types': 1,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 1,
    'no-unused-vars': 1,
    'react/prefer-stateless-function': 0,
    'import/extensions': 1,
    'import/prefer-default-export': 'off',
    'react/jsx-uses-vars': 2,
    'no-console': 1,
    'require-yield': 1
  }
};
