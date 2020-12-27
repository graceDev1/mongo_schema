const route = require('express').Router();
const controller = require('../controllers/CourseController');

route.post('/addone', controller.addCourses);
route.get('/', controller.findAllCourse);

module.exports = route;