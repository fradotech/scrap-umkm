const { Parser } = require('json2csv');
const { fileName } = require('../data/data.config');

module.exports = response = (res, dataList) => {
  const parser = new Parser();
  const csv = parser.parse(dataList);

  res.header('Content-Type', 'csv');
  res.attachment(fileName + new Date() + '.csv');
  res.header('fileName', fileName + new Date() + '.csv');
  res.send(csv)
}