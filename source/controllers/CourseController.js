const CourseModel = require('../models/CourseModel');
const courseModel = require('../models/CourseModel');


// add new course to the list
let addCourses = (req,res) => {
    const {title, description, price} = req.body;
    if(!title || !description || !price){
        return res.status(501).json({msg: 'all field must be filled'});
    }
    const newCourse = new CourseModel({title, description, price});
    CourseModel.findOne({title})
    .then((course)=> {
        if(course){
            return res.status(500).json({msg:'this course is already iin the list'})
        }
        newCourse.save()
        .then((course)=> res.status(200).json({
            id:course.id,
            title: course.title
        }))
        .catch((e)=> res.status(501).json({mg:'error !!'}))
        })
        .catch(e => res.status(501).json({e}))

};



// display all courses

let findAllCourse = (req,res) => {
    CourseModel.find()
    .then((course) => res.status(200).json(course))
    .catch(err => res.json(err));
}


// add user to list




module.exports = {addCourses, findAllCourse};