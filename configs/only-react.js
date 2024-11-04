import react from '../airbnb-react/react.js';
import reactA11y from '../airbnb-react/react-a11y.js';
import reactHooks from '../airbnb-react/react-hooks.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  {
    plugins: { 'jsx-a11y': pluginJsxA11y, pluginReact },

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJsxA11y.flatConfigs.strict,
  pluginReact.configs.flat.recommended,
  react,
  reactA11y,
  reactHooks,
]);
