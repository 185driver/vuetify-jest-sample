module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'linebreak-style': ['error', 'windows'],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'no-nested-ternary': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-cond-assign': ['error', 'except-parens'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
