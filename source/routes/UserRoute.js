const route = require('express').Router();
const controller = require('../controllers/UserController');

route.post('/', controller.funct_save);

route.get('/', controller.funct_get_user);

module.exports = route;