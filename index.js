module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'no-only-tests'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'comma-dangle': 0,
    'import/extensions': 0,
    'import/no-unresolved': 1, // To minimize false errors with Webpack loaders
    'max-len': [1, 100, { ignoreTrailingComments: true }],
    'new-cap': 1,
    'no-console': 1,
    'no-only-tests/no-only-tests': 2,
    'no-param-reassign': 0,
    'no-return-assign': 1,
    'object-curly-newline': 0,
    'prefer-destructuring': 0,
    'spaced-comment': 0
  }
};
