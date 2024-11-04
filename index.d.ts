import { Linter } from 'eslint';

type Configs = {
  base: Linter.Config[];
  onlyReact: Linter.Config[];
  react: Linter.Config[];
};

declare const configs: Configs;

export default configs;
