const express = require('express')
const app = express()
const port = 3000

const detailPage = require('./src/services/detail-page')
const Data = require('./src/models/Data');
const response = require('./src/infrastructure/response');
const { hashedIds } = require('./src/data/data.config');
const defineField = require('./src/services/define-field.service');

app.get('/', async (req, res) => {
  const dataList = []
  
  let i = 0

  for (i = 0; i < hashedIds.length; i++) {
    const $ = await detailPage(hashedIds[i])
    let data = new Data()    
    data = defineField($, data, hashedIds[i])
    
    //console.log(data.a701_jumlah)
   // console.log(data.a701_nilai_jual_total)
    console.log(data.c1102_omzet)
    console.log(data.c1102_pendapatan_operasional)
    console.log(data.c1102_pendapatan_non_ops)
    console.log(data.c1102_pendapatan_lainnya_subsidi_usaha)
    console.log(data.c1102_pendapatan_lainnya_subsidi_fiskal)
  



    dataList.push(data)
    console.info(i + 1, '\tSuccess', hashedIds[i], data.c305_nik_pengusaha, data.c301_nama_pengusaha)
  }

  console.info('\nSuccess scrap all data', i)
  response(res, dataList)
})

app.listen(port, () => console.info(`http://localhost:${port}`))