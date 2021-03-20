require('dotenv').config()

const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 5000
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const path = require('path')

app.use(cors());
app.use(express.json());
app.use("/", router);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
}

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "jduncan97@gmail.com",
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });