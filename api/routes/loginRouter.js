const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/login_controllers');

router.get('/', loginControllers.login_get);

router.post('/', loginControllers.login_post);

module.exports = router;