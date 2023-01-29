<<<<<<< HEAD
const { defineConfig } = require("cypress");

module.exports = defineConfig({
=======
//const { defineConfig } = require("cypress");
import { defineConfig } from "cypress";
export default defineConfig({
>>>>>>> main
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
