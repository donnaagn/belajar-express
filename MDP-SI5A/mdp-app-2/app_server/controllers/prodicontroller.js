const prodi =(req,res) => {
   
    const prodi =[
          {
              namaprodi: "Sistem Informasi",
              fakultas:"FIKR",
              singkatan:"SI"
          },
          {
              namaprodi: "Informatika",
              fakultas:"FIKR",
              singkatan:"IF"
          },
          {
              namaprodi: "Teknik Elektro",
              fakultas:"FIKR",
              singkatan:"TE"
          },
          {
              namaprodi: "Manajemen Informatika",
              fakultas:"FIKR",
              singkatan:"MI"
          },
          {
              namaprodi: "Manajemen",
              fakultas:"FEB",
              singkatan:"MJ"
          },
          {
              namaprodi: "Akuntansi",
              fakultas:"FEB",
              singkatan:"AK"
          },
        ];
        res.render('prodi',{title: 'Halaman Home',prodi,layout:'main'});
        };
    
module.exports = {prodi}