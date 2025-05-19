import { Linter } from 'eslint';
import globals from 'globals';

type Globals = typeof globals;

type Configs = {
  base: Linter.Config[];
  react: Linter.Config[];
  prettier: Linter.Config;
  globals: Globals;
};

declare const configs: Configs;

export default configs;
