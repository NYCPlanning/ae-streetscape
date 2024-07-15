import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";
import JsonToTS from "json-to-ts";

register(StyleDictionary, {
  excludeParentKeys: true,
});

import { minifyDictionary } from "style-dictionary/utils";

// TODO add a custom formatter to mimic javascript/module but to generate *.ts file

StyleDictionary.registerFormat({
  name: "custom/json",
  format: ({ dictionary }) => JSON.stringify(dictionary, null, 2),
});

// StyleDictionary.registerFormat({
//   name: "typescript/accurate-module-declarations",
//   format: ({ dictionary }) =>
//     "declare const root: RootObject\n" +
//     "export default root\n" +
//     JsonToTS(dictionary).join("\n"),
// });

StyleDictionary.registerFormat({
  name: "typescript/module-minimal",
  format: ({ dictionary }) =>
    "declare const root: RootObject\n" +
    "export default root\n" +
    JsonToTS(minifyDictionary(dictionary.tokens)).join("\n"),
});

const sdOldJSON = new StyleDictionary(
  {
    source: ["figma_tokens/design-system-old.json"],
    preprocessors: ["tokens-studio"],
    platforms: {
      json_streetscape: {
        transformGroup: "tokens-studio",
        transforms: ["ts/size/px"],
        buildPath: "figma_tokens/build/",
        files: [
          {
            destination: "tokens-old.json",
            format: "json/nested",
          },
        ],
      },
    },
  },
  { verbosity: "verbose" },
);

const sdOldTS = new StyleDictionary(
  {
    source: ["figma_tokens/design-system-old.json"],
    preprocessors: ["tokens-studio"],
    platforms: {
      typescript_streetscape: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/build/",
        files: [
          {
            destination: "tokens-old.ts",
            format: "javascript/module",
          },
        ],
      },
    },
  },
  { verbosity: "verbose" },
);

const sdOld = new StyleDictionary(
  {
    source: ["figma_tokens/design-system-old.json"],
    preprocessors: ["tokens-studio"],
    platforms: {
      json: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/json/",
        files: [
          {
            destination: "tokens-json-old.json",
            format: "custom/json",
          },
        ],
      },
      json_streetscape: {
        transformGroup: "tokens-studio",
        transforms: ["ts/size/px"],
        buildPath: "figma_tokens/build/",
        files: [
          {
            destination: "tokens-json-old.json",
            format: "json/nested",
          },
        ],
      },
      typescript_streetscape: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/ts/",
        files: [
          {
            destination: "tokens-module-declarations-old.ts",
            format: "typescript/module-declarations",
          },
        ],
      },
      javascript_streetscape: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/js/",
        files: [
          {
            destination: "tokens-module-old.js",
            format: "javascript/module",
          },
        ],
      },
      typescript_streetscape_module: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/ts/",
        files: [
          {
            destination: "tokens-module-declarations-old.ts",
            format: "typescript/module-declarations",
          },
        ],
      },
      typescript_streetscape_module_minimal: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/ts/",
        files: [
          {
            destination: "tokens-module-minimal-old.ts",
            format: "typescript/module-minimal",
          },
        ],
      },
    },
  },
  { verbosity: "verbose" },
);
const sdNew = new StyleDictionary(
  {
    // source: ["figma_tokens/**/*.json"],
    // source: ["figma_tokens/**/*.json"],
    source: ["figma_tokens/design-system-new.json"],
    preprocessors: ["tokens-studio"],
    platforms: {
      javascript_streetscape_a: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/js/",
        files: [
          {
            destination: "tokens-new-a.js",
            format: "javascript/module",
          },
        ],
      },
      javascript_streetscape_b: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/js/",
        files: [
          {
            destination: "tokens-new-b.js",
            format: "javascript/object",
          },
        ],
      },
      javascript_streetscape_c: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/js/",
        files: [
          {
            destination: "tokens-new-c.js",
            format: "javascript/es6",
          },
        ],
      },
      typescript_streetscape: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/ts/",
        files: [
          {
            destination: "tokens-new.ts",
            format: "typescript/module-declarations",
          },
        ],
      },
      typescript_streetscape_custom: {
        transformGroup: "tokens-studio",
        buildPath: "figma_tokens/js/",
        files: [
          {
            destination: "tokens-new-custom.ts",
            format: "typescript/accurate-module-declarations",
          },
        ],
      },
      // css: {
      //   transformGroup: "tokens-studio", // <-- apply the tokens-studio transformGroup to apply all transforms
      //   // transforms: ["name/kebab"], // <-- add a token name transform for generating token names, default is camel
      //   buildPath: "figma_tokens/css/",
      //   files: [
      //     {
      //       destination: "variables.css",
      //       format: "css/variables",
      //     },
      //   ],
      // },
    },
  },
  { verbosity: "verbose" },
);

// await sdOldJSON.cleanAllPlatforms();
// await sdOldJSON.buildAllPlatforms();
await sdOldTS.cleanAllPlatforms();
await sdOldTS.buildAllPlatforms();
// await sdOld.cleanAllPlatforms();
// await sdOld.buildAllPlatforms();
// await sdNew.cleanAllPlatforms();
// await sdNew.buildAllPlatforms();
