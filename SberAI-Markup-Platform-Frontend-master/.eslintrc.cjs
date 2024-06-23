/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['fsd-architecture-plugin'],
  rules: {
    'fsd-architecture-plugin/path-checker': ['error', { alias: '@' }],
    'fsd-architecture-plugin/public-api-imports': [
      'error',
      { alias: '@', testFilesPatterns: ['**/*.test.ts'] },
    ],
    'fsd-architecture-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/componentRender.ts']
      },
    ],
  }
}
