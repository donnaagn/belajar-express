const index = (req,res) => {
    const berita =[
        {
            judul: "Berita 1",
            isi:"isi berita 1"
        },
        {
            judul:"Berita 2",
            isi: "Isi Berita 2"
        },
    ];
      res.render('index',{title: 'Halaman Home',berita,layout:'main'});

}
const about =(req,res) =>{
    res.render('about',{title: 'About us',layout: 'main'});
}
const contact =(req,res) => {
      res.render('contact',{title: 'Contact',layout: 'main'});
}
// const prodi =(req,res) => {
   
//     const prodi =[
//           {
//               namaprodi: "Sistem Informasi",
//               fakultas:"FIKR",
//               singkatan:"SI"
//           },
//           {
//               namaprodi: "Informatika",
//               fakultas:"FIKR",
//               singkatan:"IF"
//           },
//           {
//               namaprodi: "Teknik Elektro",
//               fakultas:"FIKR",
//               singkatan:"TE"
//           },
//           {
//               namaprodi: "Manajemen Informatika",
//               fakultas:"FIKR",
//               singkatan:"MI"
//           },
//           {
//               namaprodi: "Manajemen",
//               fakultas:"FEB",
//               singkatan:"MJ"
//           },
//           {
//               namaprodi: "Akuntansi",
//               fakultas:"FEB",
//               singkatan:"AK"
//           },
//         ];
//         res.render('prodi',{title: 'Halaman Home',prodi,layout:'main'});
//         };
    
module.exports = {index,about,contact}