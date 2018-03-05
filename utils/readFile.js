const fs = require("fs");

const readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, { flag: "r+", encoding: "utf8" }, function(
      error,
      data
    ) {
      if (error) reject(error);
      resolve(data);
    });
  });
};
module.exports = readFile;
