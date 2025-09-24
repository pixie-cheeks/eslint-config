import { defineConfig } from 'eslint/config';
import { createNodeResolver } from 'eslint-plugin-import-x';
import base from './base.js';

export default defineConfig([
  ...base,
  {
    settings: {
      'import-x/resolver-next': [createNodeResolver()],
      'import-x/extensions': ['.js', '.cjs', '.mjs', '.jsx'],
      'import-x/core-modules': [],
      'import-x/ignore': [
        'node_modules',
        String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`,
      ],
    },
  },
]);
