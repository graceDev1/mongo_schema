const express = require('express');
const mongoose = require('./dbconect/index');
const app = express()


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server on http://localhost:${port}`));