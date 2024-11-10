import { Linter } from 'eslint';

type Configs = {
  base: Linter.Config[];
  react: Linter.Config[];
  prettier: Linter.Config;
};

declare const configs: Configs;

export default configs;
