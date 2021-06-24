const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users_controllers');

router.get('/', usersControllers.users_get);

router.get('/all', usersControllers.users_get_all);

router.post('/', usersControllers.users_post);

router.post('/create-admin', usersControllers.users_post_admin);

router.put('/:id', usersControllers.users_put);

router.delete('/:id', usersControllers.users_delete);

module.exports = router;