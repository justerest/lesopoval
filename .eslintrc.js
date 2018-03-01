// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: ['html'],
  settings: {
    'import/resolver': {
      'webpack': {
        'config': './webpack.prod.js',
      },
    },
  },
  rules: {
    'brace-style': [1, 'stroustrup'],
    'comma-dangle': [1, 'always-multiline'],
    'curly': [1, 'multi-line'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-empty': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],
    'no-var': 1,
    'prefer-const': 1,
    'quotes': [1, 'single', { avoidEscape: true }],
    'semi': 1,
  },
}
