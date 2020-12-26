const mongoose = require('../dbconect/index');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password : {
        type : String,
        required: true
    },
    create_at :{
        type : Date,
        default : Date.now
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'courses'
        }
    ]
});

module.exports = mongoose.model('users',UserSchema);