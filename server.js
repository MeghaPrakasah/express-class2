
const express = require('express');
const app = express();

//data base 
const connectDb = require('./config/dbCollection');

const contactRouter = require('./Routes/contactRouter');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000 ;
connectDb();


app.use(express.json());

// middleware function 08-01-2024
// app.use((req,res,next)=>{console.log(req.url,req.method,Date.now()),next()});

app.get('/',(req,res)=>{res.status(200).json({"message":"Message from server.js"});});
app.use('/api/contacts',contactRouter);


app.listen(port,()=>{console.log(`Server is running on ${port}`);});