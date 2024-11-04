import pluginJs from '@eslint/js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import nodePlugin from 'eslint-plugin-n';
import importPluginX from 'eslint-plugin-import-x';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

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

export default [
  pluginJs.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended-module'],
  importPluginX.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
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
];
