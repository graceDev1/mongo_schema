const express = require('express');
const app = express()

app.use(express.json());


// endpoint

app.use('/api/user', require('./routes/UserRoute'));

app.use('/api/course', require('./routes/CourseRoute'));


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server on http://localhost:${port}`));