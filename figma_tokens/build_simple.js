// import { StyleDictionary } from "style-dictionary";

// import StyleDictionary from "style-dictionary";

// import { extend } from "style-dictionary";

// import StyleDictionary from "style-dictionary";
import StyleDictionary from "style-dictionary";

function getStyleDictionaryConfig(theme) {
  return {
    source: [`figma_tokens/${theme}.json`],
    platforms: {
      ts: {
        transformGroup: "ts",
        buildPath: `figma_tokens/ts/`,
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector: `.${theme}-theme`,
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

["core", "light", "dark"].map(function (theme) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${theme}]`);

  // const style = StyleDictionary.extend(getStyleDictionaryConfig(theme));

  // StyleDictionary.extend("figma_tokens/config.json").buildAllPlatforms();

  const sd = new StyleDictionary(getStyleDictionaryConfig(theme), {
    verbosity: "verbose",
  });
  sd.buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
