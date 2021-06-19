const express = require('express');
const router = express.Router();
const logoutControllers = require('../controllers/logout_controllers');

router.get('/', logoutControllers.logout_get);

module.exports = router;