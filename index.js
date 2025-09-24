import vanilla from './configs/vanilla.js';
import typescript from './configs/typescript.js';
import react from './configs/react.js';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

const configs = {
  vanilla,
  typescript,
  react,
  globals,
  prettier: configPrettier,
  version: 'newest',
};

export default configs;
