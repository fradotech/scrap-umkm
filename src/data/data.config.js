const { fileName } = require("../../env");

module.exports = {
  fileName,
  hashedIds: require(`./part-2/${fileName}.json`)
}