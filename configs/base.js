import bestPractices from '../airbnb/best-practices.js';
import errors from '../airbnb/errors.js';
import es6 from '../airbnb/es6.js';
import imports from '../airbnb/imports.js';
import strict from '../airbnb/strict.js';
import style from '../airbnb/style.js';
import variables from '../airbnb/variables.js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginNode from 'eslint-plugin-n';
import pluginJs from '@eslint/js';
import {
  flatConfigs as pluginImportXFlatConfigs,
  createNodeResolver,
} from 'eslint-plugin-import-x';
import * as pluginRegexp from 'eslint-plugin-regexp';
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

export default defineConfig([
  pluginJs.configs.recommended,
  pluginImportXFlatConfigs.recommended,
  {
    settings: {
      'import-x/resolver-next': [createNodeResolver()],
      'import-x/extensions': ['.js', '.cjs', '.mjs', '.jsx'],
      'import-x/core-modules': [],
      'import-x/ignore': [
        'node_modules',
        String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`,
      ],
    },
  },
  bestPractices,
  errors,
  es6,
  imports,
  strict,
  style,
  variables,
  pluginUnicorn.configs.recommended,
  pluginNode.configs['flat/recommended-module'],
  pluginRegexp.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        // Don't know what the difference is between these ones and the above
        // ones. import-x does not work properly without the below two.
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
        },
      },
    },
    plugins: { '@stylistic': pluginStylistic },
    rules: {
      'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
      'unicorn/no-array-for-each': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/numeric-separators-style': [
        'error',
        {
          number: {
            minimumDigits: 0,
          },
        },
      ],
      'import-x/prefer-default-export': 'off',
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/no-default-export': 'error',
      'n/hashbang': ['warn', { ignoreUnpublished: true }],
      'func-style': 'error',
      'no-plusplus': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'consistent-return': 'off', // Causes conflict with no-useless-undefined
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
]);
