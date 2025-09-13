import type { Linter } from 'eslint';
import globals from 'globals';

type Globals = typeof globals;

type Configs = {
  base: Linter.RulesRecord[];
  react: Linter.RulesRecord[];
  prettier: Linter.RulesRecord;
  globals: Globals;
};

declare const configs: Configs;

export default configs;
