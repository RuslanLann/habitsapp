module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    'prettier/prettier': 0,
    indent: ['error', 2],
    quotes: ['error', 'single'],
    curly: ['error', 'all'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'prefer-spread': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'prefer-rest-params': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    'no-this-before-super': 'error',
    'no-dupe-class-members': 'error',
    'constructor-super': 'error',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-tabs': 'error',
    'max-lines': ['error', 120],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'require-await': ['error'],
    'no-useless-return': 'error',
    'no-useless-escape': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-param-reassign': 'error',
    'no-global-assign': 'error',
    'no-fallthrough': 'error',
    'no-eval': 'error',
    'no-eq-null': 'error',
    'no-else-return': 'error',
    eqeqeq: 'error',
    'dot-notation': 'error',
    'valid-jsdoc': 'error',
    'no-empty': 'error',
    'no-duplicate-case': 'error',
    'no-debugger': 'error',
    'no-await-in-loop': 'error',
    'no-async-promise-executor': 'error',
    'getter-return': 'error',
    'no-sequences': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-multi-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    complexity: ['error', 25],
    'arrow-parens': null,
  },
};
