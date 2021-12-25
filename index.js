const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const initiateMongo = require('./config/database');
const news = require('./routes/news');
require("dotenv").config();

initiateMongo(); //starting mongo server

const app = express();

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to Samachaar App- the magnificant place for all news " });
});
//
app.use("/user", user);
app.use("/", news);

module.exports = app