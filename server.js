const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const connectDB = require('./src/config/db.js');

const port = process.env.PORT || 3001;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log(`APP STARTED ON PORT ${port}`));
