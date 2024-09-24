const express = require("express")// import modul express
const app = express()//isisalisasi exprezs
const port = 3000 //port

//route/
app.get("/",(req,res) =>{
    //res.send("hello");
    res.sendFile(__dirname + "/index.html");
});

//route/about
app.get("/about",(req,res) => {
    //res.send("About us");
    res.sendFile(__dirname + "/about.html");
});
//route/contact
app.get("/contact",(req,res) => {
    //res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
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
//handle route
app.use("/",(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});
//jalankan server
app.listen(port, () =>{
    console.log(`server dapat diakses di http://localhost:${port}`);
});