import base from './configs/base.js';
import react from './configs/react.js';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

const configs = {
  base,
  react,
  globals,
  prettier: configPrettier,
};

export default configs;
