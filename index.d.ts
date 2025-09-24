import type { Linter } from 'eslint';
import globals from 'globals';

type Globals = typeof globals;

type Configs = {
  vanilla: Linter.RulesRecord[];
  typescript: Linter.RulesRecord[];
  react: Linter.RulesRecord[];
  prettier: Linter.RulesRecord;
  globals: Globals;
  version: string;
};

declare const configs: Configs;

export default configs;
