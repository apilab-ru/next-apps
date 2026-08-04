import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const workspaceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const nextBin = require.resolve('next/dist/bin/next');

const result = spawnSync(process.execPath, [nextBin, 'build'], {
  cwd: path.join(workspaceRoot, 'apps', 'apilab-main'),
  env: {
    ...process.env,
    APILAB_STATIC_EXPORT: 'true',
  },
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
