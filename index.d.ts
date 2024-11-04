import { Linter } from 'eslint';

type Configs = {
  base: Linter.Config[];
};

declare const configs: Configs;

export default configs;
