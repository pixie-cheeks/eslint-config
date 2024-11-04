import react from '../airbnb-react/react.js';
import reactA11y from '../airbnb-react/react-a11y.js';
import reactHooks from '../airbnb-react/react-hooks.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginUnicorn from 'eslint-plugin-unicorn';
import { defineFlatConfig } from 'eslint-define-config';
import configPretter from 'eslint-config-prettier';
import globals from 'globals';

export default defineFlatConfig([
  pluginJsxA11y.flatConfigs.strict,
  pluginReact.configs.flat.recommended,
  pluginReact.configs['jsx-runtime'],
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
      'react-hooks': pluginReactHooks,
      react: pluginReact,
      unicorn: pluginUnicorn,
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
    rules: {
      'unicorn/filename-case': ['error', { cases: { pascalCase: true } }],
    },
  },
  react,
  reactA11y,
  reactHooks,
  configPretter,
]);
