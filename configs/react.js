import react from '../airbnb-react/react.js';
import reactA11y from '../airbnb-react/react-a11y.js';
import reactHooks from '../airbnb-react/react-hooks.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  pluginJsxA11y.flatConfigs.strict,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      react: pluginReact,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  react,
  pluginReact.configs.flat['jsx-runtime'],
  reactA11y,
  reactHooks,
  {
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelAttributes: ['label'],
          controlComponents: [],
          depth: 25,
          assert: 'either',
        },
      ],
    },
  },
  {
    files: ['**/*.{j,t}sx'],
    rules: {
      'func-style': 'off',
      'unicorn/filename-case': ['error', { cases: { pascalCase: true } }],
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.tsx', '.jsx'] },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
    },
  },
]);
