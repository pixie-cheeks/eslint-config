import react from '../airbnb-react/react.js';
import reactA11y from '../airbnb-react/react-a11y.js';
import reactHooks from '../airbnb-react/react-hooks.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineFlatConfig } from 'eslint-define-config';
import globals from 'globals';

export default defineFlatConfig([
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
    files: ['**/*.jsx'],
    rules: {
      'func-style': 'off',
      'unicorn/filename-case': ['error', { cases: { pascalCase: true } }],
    },
  },
]);
