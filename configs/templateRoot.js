const path = require("path");
const templateRoot = path.join(__dirname, "./../../build/");
module.exports = {
  directory: templateRoot,
  dir: templateRoot,
  uri: templateRoot + "index.html"
};
