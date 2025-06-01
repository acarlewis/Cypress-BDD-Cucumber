const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://www.chanel.com",
    setupNodeEvents(on, config) {
      // Avoid async/await entirely
      return addCucumberPreprocessorPlugin(on, config)
        .then(() => {
          on(
            "file:preprocessor",
            createBundler({
              plugins: [createEsbuildPlugin(config)],
            })
          );
          return config;
        });
    },
  },
});
