import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: ['react', 'react-hooks', 'prettier', 'react-refresh'],
    extends: [
      js.configs.recommended,
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'react-refresh',
    ],
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: 'block', next: '*' },
      ],
      'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
    },
  },
]);
