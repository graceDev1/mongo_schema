const mongoose = require('../dbconect/index');

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    student:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ]
});

module.exports = mongoose.model('courses', courseSchema)