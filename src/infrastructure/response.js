const { Parser } = require('json2csv');
const { fileName } = require('../data/data.config');

module.exports = response = (res, dataList) => {
  const parser = new Parser();
  const csv = parser.parse(dataList);
  const name = fileName

  res.header('Content-Type', 'csv');
  res.attachment(name);
  res.header('fileName', name);
  res.send(csv)
}