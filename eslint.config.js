import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: [
      'react',
      'react-hooks',
      'react-refresh',
    ],
    extends: [
      js.configs.recommended,
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'react-refresh',
      // Fügt Prettier-Regeln hinzu und deaktiviert kollidierende ESLint-Regeln
      prettier, 
    ],
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
      
      // Erzwingt, dass die Prettier-Regeln als ESLint-Fehler gemeldet werden
      'prettier/prettier': 'error', 

      // JSX Attribute Styling: Erzwingt maximal 1 Prop pro Zeile.
      // Prettier bricht dies nur, wenn printWidth überschritten wird.
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
      'react/jsx-first-prop-new-line': ['error', 'always'],
      
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: 'block', next: '*' },
      ],
      
      // Optionale Regel, die hilft, wenn Prettier die Einrückung des ersten Attributs nicht korrekt macht
      'react/jsx-indent-props': ['error', 2],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
  },
]);