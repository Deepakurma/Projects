import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let Name = "";
let pass = false;

app.use(bodyParser.urlencoded({ extended: true }));

function Passcheck(req, res, next) {
    const password = req.body["password"];
    if (password === "12345") {
        pass = true;
    }
    next();
}

function Namegen(req, res, next) {
    console.log(req.body);
    Name = req.body["name"];
    next();
}

app.use(Passcheck);
app.use(Namegen);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (pass) {
        res.send(`<p style="color: #4CAF50; font-size: 100px; text-align: center;margin-top=50%;">Hello ${Name}</p>`);
    } else {
        res.redirect("/");
    }
});


app.listen(port, () => {
    console.log("listening on port " + port);
});
