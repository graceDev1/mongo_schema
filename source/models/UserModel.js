const mongoose = require('../dbconect/index');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    Item:[
        {
            label:{
                type:String,
                required: true
            },
            qty:{
                type : INTEGER,
                required : true
            },
            create_at:{
                type: Date,
                default: Date.now
            }
        }
    ]   
});

module.exports = mongoose.model('users',UserSchema);