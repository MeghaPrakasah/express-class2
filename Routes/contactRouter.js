

const express = require('express');
const { getContact, putContact, postContact, deleteContact } = require('../controllers/contactcontroller');
const router = express.Router();


// same routes varumbho chain reethiyill ezhutham 

router.route('/').get(getContact).post(postContact);

router.route('/:id').put(putContact);

router.route('/:id').delete(deleteContact);


module.exports = router;
