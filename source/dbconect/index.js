const mongoose = require('mongoose');
const config = require('config');

// const internetAvalable = require('internet-available');

let uri = '';

// internetAvalable().then(()=>{
//     uri = config.get('SERVER__URL');
//     console.log('INTERNET')
// })
// .catch(()=>{
//     uri = config.get('LOCALHOST__URL');
//     console.log('no internet connection')
    
// })
uri = config.get('LOCALHOST__URL');

console.log(">>>>this is the URl",uri)



mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},()=>{
    console.log('connect')
})

module.exports = mongoose;