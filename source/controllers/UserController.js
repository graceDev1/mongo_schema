const UserModel = require('../models/UserModel');
const courseModel = require('../models/CourseModel');

const funct_save_user = (req,res) =>{
    const { name, email, password } = req.body;
    //validation
    if(!name || !email ||!password) return res.status(501).json({msg:'please fill all fields'});
    UserModel.findOne({email})
    .then((user)=> {
        if(user) {
            return res.status(502).json(
                {
                    msg: 'User is already exists'
                }
                );
        }
        else{
            let new__user = new UserModel({name,email,password});
            new__user.save()
            .then(user => {
                res.json({
                    user:{
                        id:user.id,
                        name:user.name
                    }
                })
            })
            .catch(err => res.json({msg:err}));
        }
       
    })
    .catch(err => res.json({msg:err}))
    
}


// fetch users 
const funct_get_user = (req,res) => {
    UserModel.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json({err}));
}

const addCourseToUser = (req,res) =>{
    let userID = req.params.id
    let courses = req.body.courses
    
    courseModel.findById({_id:courses})
    .then((course)=>{
        if(!course){
            return res.json({msg: 'course does not exists'})
        }
        UserModel.findByIdAndUpdate(userID,
            {$push:{courses}},
            {new: true, useFindAndModify:false }
        ).
        then((user) => res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                courses: user.courses
            }
        }))
        .catch(err => console.log(err))
    })
    
}


// get user and populate course

const getUserWithPopulateCourse = (req,res) => {
    const id = req.params.id
    UserModel.findById({_id:id}).populate('courses')
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err));
}

module.exports = {
    funct_save_user, 
    funct_get_user, 
    addCourseToUser,
    getUserWithPopulateCourse
};