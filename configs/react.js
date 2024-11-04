import base from './base.js';
import onlyReact from './only-react.js';

export default [
  ...base,
  ...onlyReact,
  {
    rules: {
      'unicorn/filename-case': ['error', { cases: { pascalCase: true } }],
    },
  },
];
