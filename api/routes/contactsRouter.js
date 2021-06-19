const express = require('express');
const router = express.Router();
const contactsControllers = require('../controllers/contacts_controllers');

router.get('/', contactsControllers.contacts_get);

router.get('/all', contactsControllers.contacts_get_all);

router.post('/', contactsControllers.contacts_post);

router.put('/:id', contactsControllers.contacts_put);

router.delete('/delete-many', contactsControllers.contacts_delete_many);

router.delete('/:id', contactsControllers.contacts_delete);

module.exports = router;