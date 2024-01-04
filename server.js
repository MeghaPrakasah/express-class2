
const express = require('express');
const app = express();
app.use(express.json());

const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000 ;

const contactRouter = require('./Routes/contactRouter');
app.use('/api/contacts',contactRouter);


app.listen(port,()=>{console.log(`Server is running on ${port}`);});

// app.get('/api/contacts',(req,res)=>{res.status(200).json({"message":"get all contacts"});});