const express = require('express');
const router = express.Router();
const companiesControllers = require('../controllers/companies_controllers');

router.get('/', companiesControllers.companies_get);

router.get('/all', companiesControllers.companies_get_all);

router.post('/', companiesControllers.companies_post);

router.put('/:id', companiesControllers.companies_put);

router.delete('/:id', companiesControllers.companies_delete);

module.exports = router;