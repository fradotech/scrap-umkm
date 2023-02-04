const express = require('express')
const app = express()
const port = 3000

const detailPage = require('./src/services/detail-page')
const Data = require('./src/models/Data');
const response = require('./src/infrastructure/response');
const { dataJson, fileName } = require('./src/data/data.config');
const defineField = require('./src/services/define-field.service');
const logger = require('./src/services/logger');

app.get('/', async (req, res) => {
  const dataList = []
  
  let i = 0

  for (i = 0; i < 45; i++) {
    const $ = await detailPage(dataJson[i].hashed_id)
    let data = new Data()    
    data = defineField($, data, dataJson[i].hashed_id)
    
    logger(data)
    dataList.push(data)
    console.info(i + 1, '\tSuccess', dataJson[i].hashed_id, data.c305_nik_pengusaha, data.c301_nama_pengusaha)
  }

  console.info('\nSuccess scrap', i, fileName)
  response(res, dataList)
})

app.listen(port, () => console.info(`http://localhost:${port}`))