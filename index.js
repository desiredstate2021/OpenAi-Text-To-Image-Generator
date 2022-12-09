const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


app = express();

// enable bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/openapi', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`start listening on port : ${port}`));
