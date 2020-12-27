const route = require('express').Router();
const controller = require('../controllers/UserController');

route.post('/', controller.funct_save_user);

route.get('/', controller.funct_get_user);

route.post('/addCourse/:id', controller.addCourseToUser)
route.get('/course/:id', controller.getUserWithPopulateCourse)

module.exports = route;