const { fileName } = require("../../env");

module.exports = {
  fileName,
  hashedIds: require(`./${fileName}.json`)
}