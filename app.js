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

    //test data 1202 a
    // console.log(data.c1202_B_modal_produksi)
    // console.log(data.c1202_B_pemasaran_jaringan_usaha)
    // console.log(data.c1202_B_ekspor)
    // console.log(data.c1202_B_digitalisasi)
    //console.log(data.c1202_B_standarisasi)
    //console.log(data.c1202_B_hak_kekayaan_intelektual)
//test data 1202 b
    //  console.log(data.c1202_B_usaha_perusahaan_sendiri)
    //  console.log(data.c1202_B_pemerintah)
    //  console.log(data.c1202_B_usaha_perusahaan_swasta)
    //  console.log(data.c1202_B_LSM_lembaga_swadaya_masyarakat)
  
//test data 1203 : 



//revisi v1.2
console.log(data.c402_A_is_Standard_Nasional_Indonesia)
console.log(data.c402_A_Standard_Nasional_Indonesia)
console.log(data.c402_A_is_Halal)
console.log(data.c402_A_Halal)
console.log(data.c402_A_is_Nutrition_Fact_Uji_Produk)
console.log(data.c402_A_Nutrition_Fact_Uji_Produk)
console.log(data.c402_A_is_Hazard_Analisis_Critical_Control_Point)
console.log(data.c402_A_Hazard_Analisis_Critical_Control_Point)
console.log(data.c402_A_is_Merek)
console.log(data.c402_A_Merek)
console.log(data.c402_A_is_Mitigasi_Kebencanaan)
console.log(data.c402_A_Mitigasi_Kebencanaan)
console.log(data.c402_A_is_Standar_Manajemen_Mutu)
console.log(data.c402_A_Standar_Manajemen_Mutu)
console.log(data.c402_A_is_Manajemen_Keamanan_Pangan)
console.log(data.c402_A_Manajemen_Keamanan_Pangan)
console.log(data.c402_A_is_Sistem_Manajemen_Lingkungan)
console.log(data.c402_A_Sistem_Manajemen_Lingkungan)





//console.log(data.c1201_A_Pembinaan_Teknis_Produksi)
//console.log(data.c1201_A_Pembinaan_Pemasaran)



    
    // console.log(data.c401_A_izin_gangguan)
    // console.log(data.c401_A_izin_daftar_perusahaan)
    // console.log(data.c401_A_jasa_keuangan)
    // console.log(data.c401_A_koordinat_untuk_usaha_perikanan)
    // console.log(data.c401_A_izin_tanda_daftar_perusahaan)
    // console.log(data.c401_A_lingkungan_hidup_dan_kehutanan)
    // console.log(data.c401_A_energi_dan_sumber_daya_mineral)
    // console.log(data.c401_A_ketenagakerjaan)
    // console.log(data.c401_A_perindustrian)
    // console.log(data.c401_A_pekerjaan_umum_perumahan_rakyat)
    // console.log(data.c401_A_transportasi)
    // console.log(data.c401_A_kesehatan_obat_makanan)
  
    dataList.push(data)
    console.info(i + 1, '\tSuccess', hashedIds[i], data.c305_nik_pengusaha, data.c301_nama_pengusaha)
  }

  console.info('\nSuccess scrap all data', i)
  response(res, dataList)
})

app.listen(port, () => console.info(`http://localhost:${port}`))