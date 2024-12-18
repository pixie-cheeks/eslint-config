import pluginJs from '@eslint/js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import nodePlugin from 'eslint-plugin-n';
import importPluginX from 'eslint-plugin-import-x';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineFlatConfig } from 'eslint-define-config';

const styleRules = {
  '@stylistic/lines-between-class-members': [
    'error',
    {
      enforce: [
        { blankLine: 'always', prev: '*', next: 'method' },
        { blankLine: 'always', prev: 'method', next: '*' },
        { blankLine: 'never', prev: 'field', next: 'field' },
      ],
    },
  ],
};

/// <reference types="@eslint-types/typescript-eslint" />

export default defineFlatConfig([
  pluginJs.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended-module'],
  importPluginX.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        // Don't know what the difference is between these ones and the above
        // ones. import-x does not work without the below two.
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.node,
    },
    plugins: { '@stylistic': stylistic },
    rules: {
      'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
      'func-style': 'error',
      'prefer-template': 'error',
      ...styleRules,
    },
  },
]);
