const express = require("express")// import modul express
const app = express()//isisalisasi exprezs
const expressLayout = require("express-ejs-layouts");//impor modul express-ejs-layouts
const port = 3000 //port

app.set("views", __dirname + "/views");  //biar bisa diakses di vercel
app.set('view engine','ejs');//supaya ejs nya dikenali 

app.use(expressLayout);
app.use(express.static('public'));

//route/
app.get("/",(req,res) =>{
    //res.send("hello");
    //res.sendFile(__dirname + "/index.html");

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
});

//route/about
app.get("/about",(req,res) => {
    //res.send("About us");
    //res.sendFile(__dirname + "/about.html");
    res.render('about',{title: 'About us',layout: 'main'})
});
//route/contact
app.get("/contact",(req,res) => {
    //res.send("Contact Us");
   // res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title: 'Contact',layout: 'main'})
});
//route/mahasiswa
app.get("/mahasiswa",(req,res) => {
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" :[{npm : 2226240056, nama:"Donna"},{npm : 2226240001, nama:"Siti"},{npm : 2226240002, nama:"Abdul"}]
    })
    
});
//route/dosen
app.get("/dosen",(req,res) => {
    res.json({
        "status" : "success",
        "message" : "Data dosen",
        "data" :[{
            prodi : "Sistem informasi",dosen:["iss","faris","dafid"]
        },
        {
            prodi : "Informatika",dosen:["derry","siska","yohanes"]
        },
    ]
        

    })
});
app.get("/prodi",(req,res) => {
    
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
});
//handle route
app.use("/",(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});
//jalankan server
app.listen(port, () =>{
    console.log(`server dapat diakses di http://localhost:${port}`);
});