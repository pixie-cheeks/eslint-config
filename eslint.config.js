import pluginJs from '@eslint/js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import nodePlugin from 'eslint-plugin-n';
import {
  flatConfigs as importXPluginFlatConfig,
  createNodeResolver,
} from 'eslint-plugin-import-x';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

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

export default defineConfig([
  pluginJs.configs.recommended,
  pluginUnicorn.configs.recommended,
  nodePlugin.configs['flat/recommended-module'],
  importXPluginFlatConfig.recommended,
  { settings: { 'import-x/resolver-next': [createNodeResolver()] } },
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
