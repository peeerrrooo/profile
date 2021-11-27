module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  rules: {
    '@typescript-eslint/member-ordering': 'off',
    'lines-between-class-members': 'error',
    'padding-line-between-statements': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'max-len': [
      'error',
      {
        code: 255
      }
    ],
    'max-depth': ['error', 3],
    'max-lines-per-function': ['error', 255],
    'max-params': ['error', 7],
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-vars': 'off',
    'no-async-promise-executor': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        bracketSpacing: true,
        singleQuote: true,
        semi: false
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*.test.ts'],
      rules: {
        'max-lines-per-function': ['error', 400],
        'max-len': [
          'error',
          {
            code: 130
          }
        ]
      }
    }
  ]
}
