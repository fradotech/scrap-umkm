const { fileName } = require("../../env");

module.exports = {
  fileName,
  dataJson: require(`./part-2/${fileName}.json`)
}