const { spawnSync } = require("node:child_process");
const { join } = require("node:path");

const inNodeModules = process.cwd().split(/[/\\]/).includes("node_modules");
const tokensPath = inNodeModules
  ? join(__dirname, "..", "dist", "index.js")
  : join(__dirname, "..", "src", "index.ts");

const extraArgs = process.argv.slice(2);

const args = [
  "tokens",
  tokensPath,
  "--strict-token-types",
  "--strict-component-types",
  ...extraArgs,
];

process.exit(
  spawnSync("chakra-cli", args, { stdio: "inherit", shell: true }).status ?? 0,
);
