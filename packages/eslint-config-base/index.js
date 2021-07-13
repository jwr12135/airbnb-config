module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['warn', require('@airbnb-config/prettier'), { usePrettierrc: false }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'unicorn/import-style':'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',
  },
};
