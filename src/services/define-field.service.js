module.exports = defineField = ($, data, hashedId) => {
  
  data.hashed_id = hashedId

  data.BLOCK_100 = 'BLOK I. PENGENALAN TEMPAT USAHA'

  data.c110_alamat_latitude_lintang = ($('#alamat_latitude')).val()
  data.c110_alamat_longitude_bujur = ($('#alamat_longitude')).val()
  data.c102_provinsi = ($('.form-control')).eq(2).val()
  data.c103_kabupaten_or_kota = ($('.form-control')).eq(3).val()
  data.c104_kecamatan_or_distrik = ($('.form-control')).eq(4).val()
  data.c105_kelurahan_or_desa_or_nagari = ($('.form-control')).eq(5).val()
  data.c106_nama_lengkap_usaha = ($('.form-control')).eq(6).val()
  data.c107_nama_usaha_komersial_or_populer = ($('.form-control')).eq(7).val()
  data.c108_tempat_usaha = ($('.form-control')).eq(8).val()

  data.c109_alamat_lengkap_usaha = ($('#alamat_lengkap')).val()
  data.c109_alamat_rt = ($('#alamat_rt')).val()
  data.c109_alamat_rw = ($('#alamat_rw')).val()
  data.c109_alamat_kode_pos = ($('#alamat_kode_pos')).val()
  data.c109_alamat_kontak_telepon = ($('#kontak_telepon')).val()
  data.c109_alamat_kontak_telepon_ext = ($('#kontak_telepon_ext')).val()
  data.c109_alamat_kontak_email = ($('#kontak_email')).val()
  data.c109_alamat_kontak_fax = ($('#kontak_fax')).val()





  data.BLOCK_200 = 'BLOK II. KARAKTERISTIK USAHA/PERUSAHAAN'

  data.c201_kegiatan_utama = ($('#kegiatan_utama')).val()
  data.c202_produk_utama = ($('#produk_utama')).val()
  data.c202_produk_kategori = ($('[class="form-control"][type="text"][disabled=""]')).eq(5).val()
  data.c202_produk_kbli = ($('[class="form-control"][type="text"][disabled=""]')).eq(6).val()
  data.c203_status_badan_usaha = ($('[class="form-control"][type="text"][disabled=""]')).eq(7).val()
  data.c204_nib = ($('#nib')).val()
  data.c205_modal_pendirian = ($('#modal_pendirian')).val()
  data.c206_npwp_badan_usaha = ($('#npwp_badan_usaha')).val()
  data.c207_bulan_mulai_operasi = ($('#bulan_mulai_operasi')).val()
  data.c207_tahun_mulai_operasi = ($('#tahun_mulai_operasi')).val()






  data.BLOCK_300 = 'BLOK III: IDENTITAS PENGUSAHA'

  data.c301_nama_pengusaha = ($('#nama_pengusaha')).val()
  data.c302_A_jenis_kelamin = ($('[name="id_jenis_kelamin"][checked=""]')).val() == 'L' ? 'Laki-laki' : ($('[name="id_jenis_kelamin"][checked=""]')).val() == 'P' ? 'Perempuan' : '-'
  data.c302_A_is_disabilitas = ($('[name="is_disabilitas"][checked=""]')).val() == '1' ? 'Ya' : ($('[name="is_disabilitas"][checked=""]')).val() == '0' ? 'Tidak' : '-'
  data.c303_tanggal_lahir = ($('#tanggal_lahir')).val()
  data.c304_status_pengusaha = ($('[class="form-control"][type="text"][disabled=""]')).eq(8).val()
  data.c305_nik_pengusaha = ($('#nik_pengusaha')).val()
  data.c306_npwp_pengusaha = ($('#npwp_pengusaha')).val()
  data.c307_is_alamat_sama = ($('[class="form-control"][type="text"][disabled=""]')).eq(9).val()
  data.c309_kontak_telepon = ($('#kontak_telepon')).val()
  data.c309_kontak_whatsapp = ($('#kontak_whatsapp')).val()
  data.c310_pendidikan_pengusaha = ($('[class="form-control"][type="text"][disabled=""]')).eq(14).val()
  data.c311_is_anggota_koperasi = ($('[class="form-control"][type="text"][disabled=""]')).eq(15).val()
  data.c312_is_memiliki_pekerjaan_lain = ($('[class="form-control"][type="text"][disabled=""]')).eq(17).val()






  data.BLOCK_400 = 'BLOK IV: IZIN DAN STANDARDISASI USAHA '

  data.c401_A_Penanaman_Modal_Dalam_Negeri = ($('[name="izin_jumlah_1"]')).val()
  data.c401_A_Pangan_Industri_Rumah_Tangga = ($('[name="izin_jumlah_2"]')).val()
  data.c401_A_MD_or_BPOM = ($('[name="izin_jumlah_3"]')).val()
  data.c401_B_Izin_lainnya_1 = ($('[name="izin_lain_nama[0]"]')).val()
  data.c401_B_Izin_lainnya_2 = ($('[name="izin_lain_nama[1]"]')).val()
  data.c401_B_Izin_lainnya_3 = ($('[name="izin_lain_nama[2]"]')).val()

  data.c402_A_Standard_Nasional_Indonesia = ($('[name="standar_jumlah_1"]')).val()
  data.c402_A_Halal = ($('[name="standar_jumlah_2"]')).val()
  data.c402_A_Nutrition_Fact_Uji_Produk = ($('[name="standar_jumlah_3"]')).val()
  data.c402_A_Hazard_Analisis_Critical_Control_Point = ($('[name="standar_jumlah_4"]')).val()
  data.c402_A_Merek = ($('[name="standar_jumlah_6"]')).val()
  data.c402_A_Mitigasi_Kebencanaan = ($('[name="standar_jumlah_7"]')).val()
  data.c402_A_Standar_Manajemen_Mutu = ($('[name="standar_jumlah_8"]')).val()
  data.c402_A_Manajemen_Keamanan_Pangan = ($('[name="standar_jumlah_9"]')).val()
  data.c402_A_Sistem_Manajemen_Lingkungan = ($('[name="standar_jumlah_10"]')).val()
  data.c402_B_Standarisasi_lainnya_1 = ($('[name="standar_lain_nama[0]"]')).val()
  data.c402_B_Standarisasi_lainnya_2 = ($('[name="standar_lain_nama[1]"]')).val()
  data.c402_B_Standarisasi_lainnya_3 = ($('[name="standar_lain_nama[2]"]')).val()







  data.BLOCK_500 = 'BLOK V. PENGHARGAAN USAHA/PERUSAHAAN'

  data.c500_Penghargaan_Pemerintah = ($('[name="penghargaan_jumlah_1"]')).val()
  data.c500_Penghargaan_Non_Pemerintah = ($('[name="penghargaan_jumlah_2"]')).val()
  data.c500_Penghargaan_Internasional = ($('[name="penghargaan_jumlah_3"]')).val()






  data.BLOCK_600 = 'BLOK VI. BAHAN BAKU / PENOLONG'

  data.c601_Sumber_Pembelian_A_Utama_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2)')).text()
  data.c601_Sumber_Pembelian_A_Utama_Kuantitas = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3)')).text()
  data.c601_Sumber_Pembelian_A_Utama_Satuan = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4)')).text()
  data.c601_Sumber_Pembelian_A_Utama_Nilai = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(5)')).text()
  data.c601_Sumber_Pembelian_A_Utama_Pemasok_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(6)')).text()
  data.c601_Sumber_Pembelian_A_Utama_Pemasok_HP = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7)')).text()

  data.c601_Sumber_Pembelian_B_Lainnya_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(2)')).text()
  data.c601_Sumber_Pembelian_B_Lainnya_Kuantitas = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(3)')).text()
  data.c601_Sumber_Pembelian_B_Lainnya_Satuan = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(4)')).text()
  data.c601_Sumber_Pembelian_B_Lainnya_Nilai = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(5)')).text()
  data.c601_Sumber_Pembelian_B_Lainnya_Pemasok_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(6)')).text()
  data.c601_Sumber_Pembelian_B_Lainnya_Pemasok_HP = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(4) > td:nth-child(7)')).text()

  data.c601_Sumber_Pembelian_C_Penolong_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2)')).text()
  data.c601_Sumber_Pembelian_C_Penolong_Kuantitas = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(3)')).text()
  data.c601_Sumber_Pembelian_C_Penolong_Satuan = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(4)')).text()
  data.c601_Sumber_Pembelian_C_Penolong_Nilai = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(5)')).text()
  data.c601_Sumber_Pembelian_C_Penolong_Pemasok_Nama = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(6)')).text()
  data.c601_Sumber_Pembelian_C_Penolong_Pemasok_HP = ($('#step6 > div:nth-child(1) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(7)')).text()

  data.c602_Usaha_Mikro_persen = ($('[name="sumber_1"]')).val()
  data.c602_Usaha_Kecil_persen = ($('[name="sumber_2"]')).val()
  data.c602_Usaha_Menengah_persen = ($('[name="sumber_3"]')).val()
  data.c602_Usaha_Besar_persen = ($('[name="sumber_4"]')).val()
  data.c602_Koperasi_persen = ($('[name="sumber_6"]')).val()
  data.c602_Sumber_Total_persen = 
  (
    +data.c602_Usaha_Mikro_persen +
    +data.c602_Usaha_Kecil_persen +
    +data.c602_Usaha_Menengah_persen +
    +data.c602_Usaha_Besar_persen +
    +data.c602_Koperasi_persen
  ).toString()

  data.c603_sumber_wilayah_dalam_negeri_desa = ($('#wilayah_dn_1')).val()
  data.c603_sumber_wilayah_dalam_negeri_kecamatan = ($('#wilayah_dn_2')).val()
  data.c603_sumber_wilayah_dalam_negeri_kab_or_kota = ($('#wilayah_dn_3')).val()
  data.c603_sumber_wilayah_dalam_negeri_kab_dalam_satu_provinsi = ($('#wilayah_dn_4')).val()
  data.c603_sumber_wilayah_dalam_negeri_provinsi_lain = ($('#wilayah_dn_5')).val()
  data.c603_sumber_wilayah_dalam_negeri_total = 
  (
    +data.c603_sumber_wilayah_dalam_negeri_desa +
    +data.c603_sumber_wilayah_dalam_negeri_kecamatan +
    +data.c603_sumber_wilayah_dalam_negeri_kab_or_kota +
    +data.c603_sumber_wilayah_dalam_negeri_kab_dalam_satu_provinsi +
    +data.c603_sumber_wilayah_dalam_negeri_provinsi_lain
  ).toString()

  data.c603_sumber_wilayah_luar_negeri_total = 0
  data.c603_sumber_total = 
  (
    +data.c603_sumber_wilayah_dalam_negeri_total +
    +data.c603_sumber_wilayah_luar_negeri_total
  )






  data.BLOCK_700 = 'BLOK VII. PRODUKSI'

  data.c702_Pendapatan_Nilai_penjualan = ($('#nilai_penjualan')).val() || '-'
  data.c702_Pendapatan_Nilai_pembelian_barang_yang_terjual = ($('#nilai_pembelian_yg_terjual')).val() || '-'
  data.c702_Pendapatan_Komisi_penjualan_barang_konsinyasi_neto = ($('#komisi_netto')).val() || '-'
  data.c702_Pendapatan_Pendapatan_jasa_reparasi_dan_perawatan_kendaraan_bermotor = ($('#pendapatan_jasa')).val() || '-'
  data.c702_Pendapatan_Laba_kotor = ($('#sumber_total_step7')).val() || '-'

  data.c703_Pendapatan_tambahan_a_Pendapatan_operasional = ($('[name="pendapatan_ops"]')).val() || '-'
  data.c703_Pendapatan_tambahan_b_Pendapatan_non_operasional = ($('[name="pendapatan_non_ops"]')).val() || '-'
  data.c703_Pendapatan_tambahan_c_subsidi_usaha = ($('[name="subsidi_usaha"]')).val() || '-'
  data.c703_Pendapatan_tambahan_c_subsidi_fiskal = ($('[name="subsidi_fiskal"]')).val() || '-'

  data.c704_Pemasaran_Rumah_Tangga = ($('#pemasaran_1')).val() || '-'
  data.c704_Pemasaran_Usaha_Mikro = ($('#pemasaran_2')).val() || '-'
  data.c704_Pemasaran_Usaha_Kecil = ($('#pemasaran_3')).val() || '-'
  data.c704_Pemasaran_Usaha_Menengah = ($('#pemasaran_4')).val() || '-'
  data.c704_Pemasaran_Usaha_Besar = ($('#pemasaran_5')).val() || '-'
  data.c704_Pemasaran_Pemerintah = ($('#pemasaran_6')).val() || '-'
  data.c704_Pemasaran_Jumlah = 
  (
    +data.c704_Pemasaran_Rumah_Tangga +
    +data.c704_Pemasaran_Usaha_Mikro +
    +data.c704_Pemasaran_Usaha_Kecil +
    +data.c704_Pemasaran_Usaha_Menengah +
    +data.c704_Pemasaran_Usaha_Besar +
    +data.c704_Pemasaran_Pemerintah
  ).toString()

  data.c705_Pemasaran_wilayah_dalam_negeri_total = ($('#wilayah-dn')).val()
  data.c705_Pemasaran_wilayah_dalam_negeri_desa = ($('#wilayah_1')).val()
  data.c705_Pemasaran_wilayah_dalam_negeri_kecamatan = ($('#wilayah_2')).val()
  data.c705_Pemasaran_wilayah_dalam_negeri_kab_or_kota = ($('#wilayah_3')).val()
  data.c705_Pemasaran_wilayah_dalam_negeri_kab_dalam_satu_provinsi = ($('#wilayah_4')).val()
  data.c705_Pemasaran_wilayah_dalam_negeri_provinsi_lain = ($('#wilayah_5')).val()
  data.c705_Pemasaran_wilayah_luar_negeri = ($('#wilayah-ln')).val()

  data.c706_Omzet_dalam_negeri = ($('[name="omzet_dalam_negeri"]')).val()
  data.c706_Omzet_luar_negeri = ($('[name="omzet_luar_negeri"]')).val()

  data.c707_Metode_digital = ($('[name="metode[1][check][]"][checked=""]')).val()
  data.c707_Metode_digital_biaya = ($('[name="metode[1][total_biaya][]"]')).val()
  data.c707_Metode_non_digital = ($('[name="metode[2][check][]"][checked=""]')).val()
  data.c707_Metode_non_digital_biaya = ($('[name="metode[2][total_biaya][]"]')).val()
  data.c707_Metode_Perantara = ($('[name="metode[3][check][]"][checked=""]')).val()
  data.c707_Metode_Perantara_biaya = ($('[name="metode[3][total_biaya][]"]')).val()
  data.c707_Metode_Vendor_Pemerintah_Pusat = ($('[name=".pemasaran_text-3-name"][checked=""]')).val()
  data.c707_Metode_Vendor_Pemerintah_Provinsi = ($('[name=".pemasaran_text-4-name"][checked=""]')).val()
  data.c707_Metode_Vendor_Pemerintah_Kabupaten_or_Kota = ($('[name=".pemasaran_text-5-name"][checked=""]')).val()
  data.c707_Metode_Lainnya = ($('[name="metode[7][check][]"][checked=""]')).val()
  data.c707_Metode_Lainnya = ($('[name="metode[7][total_biaya][]"]')).val()





  data.BLOCK_800 = 'BLOK VIII. TENAGA KERJA'

  data.c801_TK_dibayar_non_disabilitas_laki_laki = ($('[name="tk_dibayar_laki"]')).val() || '-'
  data.c801_TK_dibayar_non_disabilitas_perempuan = ($('[name="tk_dibayar_perempuan"]')).val() || '-'
  data.c801_TK_dibayar_disabilitas_laki_laki = ($('[name="tk_dibayar_disabil_laki"]')).val() || '-'
  data.c801_TK_dibayar_disabilitas_perempuan = ($('[name="tk_dibayar_disabil_perempuan"]')).val() || '-'
  data.c801_TK_dibayar_total = 
  (
    +data.c801_TK_dibayar_non_disabilitas_laki_laki +
    +data.c801_TK_dibayar_non_disabilitas_perempuan +
    +data.c801_TK_dibayar_disabilitas_laki_laki +
    +data.c801_TK_dibayar_disabilitas_perempuan
  ).toString()

  data.c801_TK_tidak_dibayar_non_disabilitas_laki_laki = ($('[name="tk_not_dibayar_laki"]')).val() || '-'
  data.c801_TK_tidak_dibayar_non_disabilitas_perempuan = ($('[name="tk_not_dibayar_perempuan"]')).val() || '-'
  data.c801_TK_tidak_dibayar_disabilitas_laki_laki = ($('[name="tk_not_dibayar_disabil_laki"]')).val() || '-'
  data.c801_TK_tidak_dibayar_disabilitas_perempuan = ($('[name="tk_not_dibayar_disabil_perempua"]')).val() || '-'
  data.c801_TK_tidak_dibayar_total =
  (
    +data.c801_TK_tidak_dibayar_non_disabilitas_laki_laki +
    +data.c801_TK_tidak_dibayar_non_disabilitas_perempuan +
    +data.c801_TK_tidak_dibayar_disabilitas_laki_laki +
    +data.c801_TK_tidak_dibayar_disabilitas_perempuan
  ).toString()

  data.c801_TK_total_non_disabilitas_laki_laki = (+data.c801_TK_dibayar_non_disabilitas_laki_laki + +data.c801_TK_tidak_dibayar_non_disabilitas_laki_laki).toString()
  data.c801_TK_total_non_disabilitas_perempuan = (+data.c801_TK_dibayar_non_disabilitas_perempuan + +data.c801_TK_tidak_dibayar_non_disabilitas_perempuan).toString()
  data.c801_TK_total_disabilitas_laki_laki = (+data.c801_TK_dibayar_disabilitas_laki_laki + +data.c801_TK_tidak_dibayar_disabilitas_laki_laki).toString()
  data.c801_TK_total_disabilitas_perempuan = (+data.c801_TK_dibayar_disabilitas_perempuan + +data.c801_TK_tidak_dibayar_disabilitas_perempuan).toString()
  data.c801_TK_total_total = (+data.c801_TK_dibayar_total + +data.c801_TK_tidak_dibayar_total).toString()

  data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_laki_laki = ($('[name="pendidikan[1][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_perempuan = ($('[name="pendidikan[1][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_laki_laki = ($('[name="pendidikan[1][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_perempuan = ($('[name="pendidikan[1][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tidak_tamat_SD_total = 
  (
    +data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_laki_laki = ($('[name="pendidikan[2][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_perempuan = ($('[name="pendidikan[2][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SD_disabilitas_laki_laki = ($('[name="pendidikan[2][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SD_disabilitas_perempuan = ($('[name="pendidikan[2][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SD_total = 
  (
    +data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SD_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SD_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_laki_laki = ($('[name="pendidikan[3][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_perempuan = ($('[name="pendidikan[3][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMP_disabilitas_laki_laki = ($('[name="pendidikan[3][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMP_disabilitas_perempuan = ($('[name="pendidikan[3][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMP_total = 
  (
    +data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMP_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMP_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_laki_laki = ($('[name="pendidikan[4][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_perempuan = ($('[name="pendidikan[4][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMA_disabilitas_laki_laki = ($('[name="pendidikan[4][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMA_disabilitas_perempuan = ($('[name="pendidikan[4][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Tamat_SMA_total = 
  (
    +data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMA_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMA_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Diploma_non_disabilitas_laki_laki = ($('[name="pendidikan[5][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Diploma_non_disabilitas_perempuan = ($('[name="pendidikan[5][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Diploma_disabilitas_laki_laki = ($('[name="pendidikan[5][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Diploma_disabilitas_perempuan = ($('[name="pendidikan[5][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Diploma_total = 
  (
    +data.c802_Tingkat_TK_Diploma_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Diploma_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Diploma_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Diploma_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_laki_laki = ($('[name="pendidikan[6][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_perempuan = ($('[name="pendidikan[6][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Sarjana_S1_disabilitas_laki_laki = ($('[name="pendidikan[6][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Sarjana_S1_disabilitas_perempuan = ($('[name="pendidikan[6][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Sarjana_S1_total = 
  (
    +data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Sarjana_S1_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Sarjana_S1_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Magister_S2_non_disabilitas_laki_laki = ($('[name="pendidikan[7][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Magister_S2_non_disabilitas_perempuan = ($('[name="pendidikan[7][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Magister_S2_disabilitas_laki_laki = ($('[name="pendidikan[7][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Magister_S2_disabilitas_perempuan = ($('[name="pendidikan[7][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Magister_S2_total = 
  (
    +data.c802_Tingkat_TK_Magister_S2_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Magister_S2_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Magister_S2_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Magister_S2_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_laki_laki = ($('[name="pendidikan[8][tk_dibayar_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_perempuan = ($('[name="pendidikan[8][tk_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Doktoral_S3_disabilitas_laki_laki = ($('[name="pendidikan[8][tk_disabil_laki]"]')).val() || '-'
  data.c802_Tingkat_TK_Doktoral_S3_disabilitas_perempuan = ($('[name="pendidikan[8][tk_disabil_perempuan]"]')).val() || '-'
  data.c802_Tingkat_TK_Doktoral_S3_total = 
  (
    +data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Doktoral_S3_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Doktoral_S3_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Total_non_disabilitas_laki_laki =
  (
    +data.c801_TK_dibayar_non_disabilitas_laki_laki +
    +data.c801_TK_tidak_dibayar_non_disabilitas_laki_laki +
    +data.c801_TK_total_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Diploma_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Magister_S2_non_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_laki_laki
  )

  data.c802_Tingkat_TK_Total_non_disabilitas_perempuan =
  (
    +data.c801_TK_dibayar_non_disabilitas_perempuan +
    +data.c801_TK_tidak_dibayar_non_disabilitas_perempuan +
    +data.c801_TK_total_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SD_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMP_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMA_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Diploma_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Sarjana_S1_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Magister_S2_non_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Doktoral_S3_non_disabilitas_perempuan
  )

  data.c802_Tingkat_TK_Total_disabilitas_laki_laki =
  (
    +data.c801_TK_dibayar_disabilitas_laki_laki +
    +data.c801_TK_tidak_dibayar_disabilitas_laki_laki +
    +data.c801_TK_total_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SD_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMP_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Tamat_SMA_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Diploma_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Sarjana_S1_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Magister_S2_disabilitas_laki_laki +
    +data.c802_Tingkat_TK_Doktoral_S3_disabilitas_laki_laki
  )

  data.c802_Tingkat_TK_Total_disabilitas_perempuan =
  (
    +data.c801_TK_dibayar_disabilitas_perempuan +
    +data.c801_TK_tidak_dibayar_disabilitas_perempuan +
    +data.c801_TK_total_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tidak_tamat_SD_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SD_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMP_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Tamat_SMA_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Diploma_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Sarjana_S1_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Magister_S2_disabilitas_perempuan +
    +data.c802_Tingkat_TK_Doktoral_S3_disabilitas_perempuan
  )

  data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_non_disabilitas_laki_laki = ($('[name="upah_gaji_laki"]')).val()
  data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_non_disabilitas_perempuan = ($('[name="upah_gaji_perempuan"]')).val()
  data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_disabilitas_laki_laki = ($('[name="upah_gaji_disabil_laki"]')).val()
  data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_disabilitas_perempuan = ($('[name="upah_gaji_disabil_perempuan"]')).val()
  data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_Total =
  (
    +data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_non_disabilitas_laki_laki +
    +data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_non_disabilitas_perempuan +
    +data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_disabilitas_laki_laki +
    +data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_disabilitas_perempuan 
  )

  data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_non_disabilitas_laki_laki = ($('[name="insentif_laki"]')).val()
  data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_non_disabilitas_perempuan = ($('[name="insentifi_perempuan"]')).val()
  data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_disabilitas_laki_laki = ($('[name="insentifi_disabil_laki"]')).val()
  data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_disabilitas_perempuan = ($('[name="insentif_disabil_perempuan"]')).val()
  data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_Total =
  (
    +data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_non_disabilitas_laki_laki +
    +data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_non_disabilitas_perempuan +
    +data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_disabilitas_laki_laki +
    +data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_disabilitas_perempuan 
  )

  data.c803_Balas_Jasa_Kerja_Total = 
  (
    +data.c803_Balas_Jasa_Kerja_A_Upah_dan_Gaji_Total +
    +data.c803_Balas_Jasa_Kerja_B_Intensif_lainnya_Total
  )

  data.c804_a_jml_bulan_kerja_per_tahun = ($('[name="jml_bulan_kerja"]')).val()
  data.c804_b_jml_rata_hari_kerja_per_bulan = ($('[name="rata_hari_kerja_per_bulan"]')).val()
  data.c804_c_jml_rata_jam_kerja_per_hari = ($('[name="rata_jam_kerja_per_hari"]')).val()





  data.BLOCK_900 = 'BLOK IX. PROSES PRODUKSI'

  data.c901_Teknologi_Manual = ($('[name="technologi[0]"][checked=""]')).val() == '1' ? 'Ya' : 'Tidak'
  data.c901_Teknologi_Mekanik = ($('[name="technologi[1]"][checked=""]')).val() == '1' ? 'Ya' : 'Tidak'
  data.c901_Teknologi_Elektronik = ($('[name="technologi[2]"][checked=""]')).val() == '1' ? 'Ya' : 'Tidak'
  data.c901_Teknologi_Digital = ($('[name="technologi[3]"][checked=""]')).val() == '1' ? 'Ya' : 'Tidak'
  data.c901_Teknologi_Artificial_Intelligence = ($('[name="technologi[4]"][checked=""]')).val() == '1' ? 'Ya' : 'Tidak'

  data.c901_Sarana_gedung_unit = ($('[name="sarana[1]"]')).val()
  data.c901_Sarana_gudang_m2 = ($('[name="sarana[2]"]')).val()
  data.c901_Sarana_lantai_jemur_m2 = ($('[name="sarana[3]"]')).val()
  data.c901_Sarana_kendaraan_unit = ($('[name="sarana[4]"]')).val()
  data.c901_Sarana_mesin_unit = ($('[name="sarana[5]"]')).val()
  data.c901_Sarana_peralatan_unit = ($('[name="sarana[6]"]')).val()







  data.BLOCK_1000 = 'BLOK X. KEMITRAAN'

  data.c1001_Kemitraan_1_Nama = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)')).text()
  data.c1001_Kemitraan_1_Alamat = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3)')).text()
  data.c1001_Kemitraan_1_No_Telepon = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4)')).text()
  data.c1001_Kemitraan_1_Kode_Lingkup_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)')).text()
  data.c1001_Kemitraan_1_Kode_Pola_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6)')).text()

  data.c1001_Kemitraan_2_Nama = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2)')).text()
  data.c1001_Kemitraan_2_Alamat = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3)')).text()
  data.c1001_Kemitraan_2_No_Telepon = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4)')).text()
  data.c1001_Kemitraan_2_Kode_Lingkup_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(5)')).text()
  data.c1001_Kemitraan_2_Kode_Pola_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(2) > td:nth-child(6)')).text()

  data.c1001_Kemitraan_3_Nama = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2)')).text()
  data.c1001_Kemitraan_3_Alamat = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3)')).text()
  data.c1001_Kemitraan_3_No_Telepon = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(4)')).text()
  data.c1001_Kemitraan_3_Kode_Lingkup_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(5)')).text()
  data.c1001_Kemitraan_3_Kode_Pola_Mitra = ($('#step10 > div:nth-child(2) > div > div > div.card-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(6)')).text()






  data.BLOCK_1100 = 'BLOK XI. LAPORAN KEUANGAN USAHA'

  data.c1101_is_memiliki_laporan = ($('[class="form-control"][type="text"][disabled=""]')).eq(19).val() || 0

  data.c1103_Pajak_pph_badan_25 = ($('[name="pph_badan_25"]')).val() || 0
  data.c1103_Pajak_pph_final_omzet = ($('[name="pph_final_omzet"]')).val() || 0

  data.c1104_A_a_Pengeluaran_Umum_1_BBM_liter = ($('[name="keluar_volume_2"]')).val() || 0
  data.c1104_A_a_Pengeluaran_Umum_1_BBM_rupiah = ($('[name="keluar_bulan_2"]')).val() || 0

  data.c1104_A_a_Pengeluaran_Umum_2_LPG_kg = ($('[name="keluar_volume_4"]')).val() || 0
  data.c1104_A_a_Pengeluaran_Umum_2_LPG_rupiah = ($('[name="keluar_bulan_4"]')).val() || 0

  data.c1104_A_a_Pengeluaran_Umum_3_Pelumas_liter = ($('[name="keluar_volume_7"]')).val() || 0
  data.c1104_A_a_Pengeluaran_Umum_3_Pelumas_rupiah = ($('[name="keluar_bulan_7"]')).val() || 0

  data.c1104_A_a_Pengeluaran_Umum_4_Batubara_kg = ($('[name="keluar_volume_3"]')).val() || 0
  data.c1104_A_a_Pengeluaran_Umum_4_Batubara_rupiah = ($('[name="keluar_bulan_3"]')).val() || 0

  data.c1104_A_a_Pengeluaran_Umum_5_Biomas_rupiah = ($('[name="keluar_bulan_5"]')).val() || 0
  data.c1104_A_a_Pengeluaran_Umum_6_Lainnya_rupiah = ($('[name="keluar_bulan_6"]')).val() || 0

  data.c1104_A_b_Pengeluaran_Umum_Listrik_KWh = ($('[name="keluar_volume_8"]')).val() || 0
  data.c1104_A_b_Pengeluaran_Umum_Listrik_rupiah = ($('[name="keluar_bulan_8"]')).val() || 0

  data.c1104_A_c_Pengeluaran_Umum_Gas_Kota_m3 = ($('[name="keluar_volume_9"]')).val() || 0
  data.c1104_A_c_Pengeluaran_Umum_Gas_Kota_rupiah = ($('[name="keluar_bulan_9"]')).val() || 0

  data.c1104_A_d_Pengeluaran_Umum_Air_Batubara_m3 = ($('[name="keluar_volume_10"]')).val() || 0
  data.c1104_A_d_Pengeluaran_Umum_Air_Batubara_rupiah = ($('[name="keluar_bulan_10"]')).val() || 0

  data.c1104_A_e_Pengeluaran_Umum_Telepon_internet_rupiah = ($('[name="keluar_bulan_11"]')).val() || 0
  data.c1104_A_f_Pengeluaran_Umum_Alat_tulis_kantor_rupiah = ($('[name="keluar_bulan_12"]')).val() || 0
  data.c1104_A_g_Pengeluaran_Umum_Kemasan_rupiah = ($('[name="keluar_bulan_13"]')).val() || 0
  data.c1104_A_h_Pengeluaran_Umum_Administrasi_bank_rupiah = ($('[name="keluar_bulan_14"]')).val() || 0
  data.c1104_A_i_Pengeluaran_Umum_Subkontrak_rupiah = ($('[name="keluar_bulan_15"]')).val() || 0

  data.c1104_B_j_Pengeluaran_Lanjutan_Angkutan_setahun = ($('[name="keluar_tahun_16"]')).val() || 0
  data.c1104_B_j_Pengeluaran_Lanjutan_Angkutan_sebulan = ($('[name="keluar_bulan_16"]')).val() || 0

  data.c1104_B_k_Pengeluaran_Lanjutan_Pembelian_suku_cadang_setahun = ($('[name="keluar_tahun_17"]')).val() || 0
  data.c1104_B_k_Pengeluaran_Lanjutan_Pembelian_suku_cadang_sebulan = ($('[name="keluar_bulan_17"]')).val() || 0

  data.c1104_B_l_Pengeluaran_Lanjutan_Perjalanan_dinas_setahun = ($('[name="keluar_tahun_18"]')).val() || 0
  data.c1104_B_l_Pengeluaran_Lanjutan_Perjalanan_dinas_sebulan = ($('[name="keluar_bulan_18"]')).val() || 0

  data.c1104_B_m_Pengeluaran_Lanjutan_Penelitian_dan_pengembangan_setahun = ($('[name="keluar_tahun_19"]')).val() || 0
  data.c1104_B_m_Pengeluaran_Lanjutan_Penelitian_dan_pengembangan_sebulan = ($('[name="keluar_bulan_19"]')).val() || 0

  data.c1104_B_n_Pengeluaran_Lanjutan_Penggunaan_jasa_setahun = ($('[name="keluar_tahun_20"]')).val() || 0
  data.c1104_B_n_Pengeluaran_Lanjutan_Penggunaan_jasa_sebulan = ($('[name="keluar_bulan_20"]')).val() || 0

  data.c1104_B_o_Pengeluaran_Lanjutan_Beban_bunga_pinjaman_setahun = ($('[name="keluar_tahun_21"]')).val() || 0
  data.c1104_B_o_Pengeluaran_Lanjutan_Beban_bunga_pinjaman_sebulan = ($('[name="keluar_bulan_21"]')).val() || 0

  data.c1104_B_p_Pengeluaran_Lanjutan_Beban_bunga_mobilisasi_setahun = ($('[name="keluar_tahun_22"]')).val() || 0
  data.c1104_B_p_Pengeluaran_Lanjutan_Beban_bunga_mobilisasi_sebulan = ($('[name="keluar_bulan_22"]')).val() || 0

  data.c1104_B_q_Pengeluaran_Lanjutan_Sewa_bangunan_setahun = ($('[name="keluar_tahun_23"]')).val() || 0
  data.c1104_B_q_Pengeluaran_Lanjutan_Sewa_bangunan_sebulan = ($('[name="keluar_bulan_23"]')).val() || 0

  data.c1104_B_q_Pengeluaran_Lanjutan_Sewa_kendaraan_setahun = ($('[name="keluar_tahun_23"]')).val() || 0
  data.c1104_B_q_Pengeluaran_Lanjutan_Sewa_kendaraan_sebulan = ($('[name="keluar_bulan_23"]')).val() || 0

  data.c1104_B_r_Pengeluaran_Lanjutan_Pendidikan_pelatihan_setahun = ($('[name="keluar_tahun_24"]')).val() || 0
  data.c1104_B_r_Pengeluaran_Lanjutan_Pendidikan_pelatihan_sebulan = ($('[name="keluar_bulan_24"]')).val() || 0

  data.c1104_B_s_Pengeluaran_Lanjutan_Pajak_pertambahan_nilai_barang_setahun = ($('[name="keluar_tahun_25"]')).val() || 0
  data.c1104_B_s_Pengeluaran_Lanjutan_Pajak_pertambahan_nilai_barang_sebulan = ($('[name="keluar_bulan_25"]')).val() || 0

  data.c1104_B_t_Pengeluaran_Lanjutan_Penyusutan_dan_amortisasi_setahun = ($('[name="keluar_tahun_26"]')).val() || 0
  data.c1104_B_t_Pengeluaran_Lanjutan_Penyusutan_dan_amortisasi_sebulan = ($('[name="keluar_bulan_26"]')).val() || 0

  data.c1104_B_u_Pengeluaran_Lanjutan_Explorasi_setahun = ($('[name="keluar_tahun_27"]')).val() || 0
  data.c1104_B_u_Pengeluaran_Lanjutan_Explorasi_sebulan = ($('[name="keluar_bulan_27"]')).val() || 0

  data.c1104_B_v_Pengeluaran_Lanjutan_Sosial_setahun = ($('[name="keluar_tahun_28"]')).val() || 0
  data.c1104_B_v_Pengeluaran_Lanjutan_Sosial_sebulan = ($('[name="keluar_bulan_28"]')).val() || 0

  data.c1104_B_w_Pengeluaran_Lanjutan_Lainnya_setahun = ($('[name="keluar_tahun_29"]')).val() || 0
  data.c1104_B_w_Pengeluaran_Lanjutan_Lainnya_sebulan = ($('[name="keluar_bulan_29"]')).val() || 0

  data.c1105_Asset_2020 = ($('#u11__coa_tahun_1_1')).val() || 0
  data.c1105_Asset_2021 = ($('#u11__coa_tahun_1_2')).val() || 0

  data.c1105_Asset_A_Lancar_2020 = ($('[name="coa_tahun_1_2"]')).val() || 0
  data.c1105_Asset_A_Lancar_2021 = ($('[name="coa_tahun_2_2"]')).val() || 0

  data.c1105_Asset_B_Tetap_2020 = ($('[name="coa_tahun_1_3"]')).val() || 0
  data.c1105_Asset_B_Tetap_2021 = ($('[name="coa_tahun_2_3"]')).val() || 0
  
  data.c1105_Asset_C_Investasi_2020 = ($('[name="coa_tahun_1_4"]')).val() || 0
  data.c1105_Asset_C_Investasi_2021 = ($('[name="coa_tahun_2_4"]')).val() || 0

  data.c1106_Modal_Pinjaman_2020 = ($('#u11__coa_tahun_1_5')).val() || 0
  data.c1106_Modal_Pinjaman_2021 = ($('#u11__coa_tahun_2_5')).val() || 0

  data.c1106_Modal_Pinjaman_A_Lancar_2020 = ($('[name="coa_tahun_1_6"]')).val() || 0
  data.c1106_Modal_Pinjaman_A_Lancar_2021 = ($('[name="coa_tahun_1_6"]')).val() || 0

  data.c1106_Modal_Pinjaman_B_Tidak_Lancar_2020 = ($('[name="coa_tahun_1_7"]')).val() || 0
  data.c1106_Modal_Pinjaman_B_Tidak_Lancar_2021 = ($('[name="coa_tahun_1_7"]')).val() || 0

  data.c1107_Modal_or_Ekuitas = ($('[name="coa_tahun_1_8"]')).val() || 0

  data.c1108_nilai_tambah_perbaiki_barang = ($('#nilai_tambah_perbaiki_barang')).val() || 0
  





  data.BLOCK_1200 = 'BLOK XII. PEMBINAAN YANG PERNAH DITERIMA'

  data.c1200_is_terima_pembinaan_modal = ($('#is_terima_pembinaan_modal')).val()
  data.c1201_A_Pembinaan_Teknis_Produksi = ($('[name="pelatihan_1"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Pemasaran = ($('[name="pelatihan_2"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Pembiayaan = ($('[name="pelatihan_3"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Ekspor = ($('[name="pelatihan_4"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Digitalisasi = ($('[name="pelatihan_5"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Manajemen = ($('[name="pelatihan_6"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Standarisasi = ($('[name="pelatihan_7"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Hak_Kekayaan_Intelektual = ($('[name="pelatihan_8"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_A_Pembinaan_Mitigasi_Kebencanaan = ($('[name="pelatihan_9"][checked=""]')).val() ? 'Ya' : 'Tidak'

  data.c1201_B_Penyelenggara_Perusahaan_Sendiri = ($('[name="penyelenggara_1"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_B_Penyelenggara_Pemerintah = ($('[name="penyelenggara_2"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_B_Penyelenggara_Perusahaan_Lain = ($('[name="penyelenggara_3"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_B_Penyelenggara_LSM = ($('[name="penyelenggara_4"][checked=""]')).val() ? 'Ya' : 'Tidak'
  data.c1201_B_Penyelenggara_Lainnya = ($('[name="penyelenggara_lainnya_5"]')).val() || 'Tidak'




  data.BLOCK_1300 = 'BLOK XIII. CATATAN'

  data.c1300_catatan = 'Input manual'






  data.BLOCK_1400 = 'BLOK XIV. KETERANGAN PEMBERI JAWABAN'

  data.c1401_Penanggung_Jawab_nama = ($('#pj_nama')).val()
  data.c1402_Penanggung_Jawab_wa_hp = ($('#pj_wa_hp')).val()
  data.c1403_Penanggung_Jawab_jabatan = ($('#pj_jabatan')).val()
  data.c1404_Penanggung_Jawab_email = ($('#pj_email')).val()
  data.c1405_Penanggung_Jawab_tgl_pendataan_awal = ($('#tgl_pendataan_awal')).val()
  data.c1405_Penanggung_Jawab_tgl_pendataan_sampai = ($('#tgl_pendataan_sampai')).val()

  return data
}