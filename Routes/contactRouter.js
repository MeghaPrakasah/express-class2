
const express = require('express');
const router = express.Router();

// same routes varumbho chain reethiyill ezhutham 

router.route('/').get((req,res)=>{res.status(200).json({"message":"get all contacts"})}).post((req,res)=>{res.status(200).json({"message":`created contact ${req.body.wow}`})});

router.route('/:id').put((req,res)=>{res.status(200).json({"message":`updated for ${req.params.id}`})});

router.route('/:id').delete((req,res)=>{res.status(200).json({"message":`Deleted for ${req.params.id}`})});



module.exports=router;
