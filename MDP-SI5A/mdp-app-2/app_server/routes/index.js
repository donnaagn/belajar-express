var express = require('express');
var router = express.Router();
// import controller
const maincontroller = require('../controllers/maincontroller')




//route
router.get('/',maincontroller.index)
router.get('/about',maincontroller.about)
router.get('/contact',maincontroller.contact)

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   const berita =[
//     {
//         judul: "Berita 1",
//         isi:"isi berita 1"
//     },
//     {
//         judul:"Berita 2",
//         isi: "Isi Berita 2"
//     },
// ];
//   res.render('index',{title: 'Halaman Home',berita,layout:'main'});
// });

// //route/about
// router.get("/about",(req,res) => {
//   //res.send("About us");
//   //res.sendFile(__dirname + "/about.html");
//   res.render('about',{title: 'About us',layout: 'main'})
// });
// router.get("/contact",(req,res) => {
//   //res.send("Contact Us");
//  // res.sendFile(__dirname + "/contact.html");
//   res.render('contact',{title: 'Contact',layout: 'main'})
// });
// router.get("/prodi",(req,res) => {
    
//   const prodi =[
//   {
//       namaprodi: "Sistem Informasi",
//       fakultas:"FIKR",
//       singkatan:"SI"
//   },
//   {
//       namaprodi: "Informatika",
//       fakultas:"FIKR",
//       singkatan:"IF"
//   },
//   {
//       namaprodi: "Teknik Elektro",
//       fakultas:"FIKR",
//       singkatan:"TE"
//   },
//   {
//       namaprodi: "Manajemen Informatika",
//       fakultas:"FIKR",
//       singkatan:"MI"
//   },
//   {
//       namaprodi: "Manajemen",
//       fakultas:"FEB",
//       singkatan:"MJ"
//   },
//   {
//       namaprodi: "Akuntansi",
//       fakultas:"FEB",
//       singkatan:"AK"
//   },
// ];
// res.render('prodi',{title: 'Halaman Home',prodi,layout:'main'});
// });
module.exports = router;
