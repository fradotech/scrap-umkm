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
    
    console.log(data.c401_A_IMB)
    console.log(data.c401_A_izin_lokasi)
    console.log(data.c401_A_izin_gangguan)
    console.log(data.c401_A_izin_daftar_perusahaan)
    console.log(data.c401_A_jasa_keuangan)
    console.log(data.c401_A_koordinat_untuk_usaha_perikanan)
    console.log(data.c401_A_izin_tanda_daftar_perusahaan)
    console.log(data.c401_A_lingkungan_hidup_dan_kehutanan)
    console.log(data.c401_A_energi_dan_sumber_daya_mineral)
    console.log(data.c401_A_ketenagakerjaan)
    console.log(data.c401_A_perindustrian)
    console.log(data.c401_A_pekerjaan_umum_perumahan_rakyat)
    console.log(data.c401_A_transportasi)
    console.log(data.c401_A_kesehatan_obat_makanan)
  
    dataList.push(data)
    console.info(i + 1, '\tSuccess', hashedIds[i], data.c305_nik_pengusaha, data.c301_nama_pengusaha)
  }

  console.info('\nSuccess scrap all data', i)
  response(res, dataList)
})

app.listen(port, () => console.info(`http://localhost:${port}`))