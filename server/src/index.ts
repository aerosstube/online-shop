require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(5000, () => { console.log(`SERVER STARTED ON ${PORT} PORT`) });
    } catch (e) {
        console.log(e);
    }
}

start();
