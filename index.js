import bestPractices from './airbnb/best-practices.js';
import errors from './airbnb/errors.js';
import es6 from './airbnb/es6.js';
import imports from './airbnb/imports.js';
import strict from './airbnb/strict.js';
import style from './airbnb/style.js';
import variables from './airbnb/variables.js';
import globals from 'globals';
import configPretter from 'eslint-config-prettier';
import stylistic from '@stylistic/eslint-plugin';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginNode from 'eslint-plugin-n';
import pluginJs from '@eslint/js';
import * as regexpPlugin from 'eslint-plugin-regexp';

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
  bestPractices,
  errors,
  es6,
  imports,
  strict,
  style,
  variables,
  pluginUnicorn.configs['flat/recommended'],
  pluginNode.configs['flat/recommended-module'],
  regexpPlugin.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: { '@stylistic': stylistic },
    rules: {
      'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
      'unicorn/no-array-for-each': 'off',
      'unicorn/numeric-separators-style': [
        'error',
        {
          number: {
            minimumDigits: 0,
          },
        },
      ],
      'import-x/prefer-default-export': 'off',
      'import-x/no-default-export': 'error',
      'import-x/extensions': ['error', 'ignorePackages'],
      'func-style': 'error',
      'no-plusplus': 'off',
      'prefer-template': 'error',
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-constant-condition': [
        'error',
        {
          checkLoops: 'allExceptWhileTrue',
        },
      ],
      ...styleRules,
    },
  },
  configPretter,
];
