import globals from 'globals';
import bestPractices from './airbnb/best-practices.js';
import errors from './airbnb/errors.js';
import es6 from './airbnb/es6.js';
import imports from './airbnb/imports.js';
import node from './airbnb/node.js';
import strict from './airbnb/strict.js';
import style from './airbnb/style.js';
import variables from './airbnb/variables.js';

export default [
  bestPractices,
  errors,
  es6,
  imports,
  node,
  strict,
  style,
  variables,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
  },
];
