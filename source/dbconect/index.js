const mongoose = require('mongoose');
const config = require('config');

const uri = config.get('mongoURI');




mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},()=>{
    console.log('connect')
})

module.exports = mongoose;