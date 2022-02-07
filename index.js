module.exports = {
  extends: 'airbnb-base',
  plugins: ['no-only-tests'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'warn', // To minimize false errors with Webpack loaders
    'import/prefer-default-export': 'off',
    'max-len': ['warn', 100, { ignoreTrailingComments: true }],
    'new-cap': 'warn',
    'no-console': 'warn',
    'no-only-tests/no-only-tests': 'error',
    'no-param-reassign': 'off',
    'no-return-assign': 'warn',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'spaced-comment': 'off'
  }
};
