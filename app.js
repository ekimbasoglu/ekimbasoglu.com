const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const path = require('path')
const cors = require('cors')
require("dotenv").config();
const PORT = 3000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, 'public'), { index: false, extensions: ['html'] }));

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});
// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });
        console.log(data);
        if (!data.company) {
            data.company = "None"
        }
        const mail = {
            sender: `${data.name} <${data.email}>`,
            to: process.env.MYEMAIL, // receiver email,
            subject: "Ekimbasoglu.rs | Someone contacted",
            text: ` Person/company trying to reach; \n
                Name: ${data.name} \n
                Email: ${data.email} \n
                Company: ${data.company} \n
                What the person/company wants to say: ${data.description}`,
        };
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Something went wrong.");
            } else {
                // res.status(200).send("success");
                res.redirect('success.html');
            }
        });
    });
});
app.route("/").get((req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});
app.route("/contact").get((req, res) => {
    res.sendFile('contact.html');
});
app.route("/projects").get((req, res) => {
    res.sendFile('projects.html');
});
app.route("/success").get((req, res) => {
    res.sendFile('success.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});