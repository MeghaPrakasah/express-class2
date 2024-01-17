
//04-01-2024
const contactSchema = require('../model/contactSchema');


//GET Details from data base
const getContact = async (req, res) => {
    const allContacts = await contactSchema.find();
    res.status(200).json({ allContacts });
};


//insert data into data base
const postContact = async (req, res) => {
    const { name, phone, email } = req.body; //DESTRUCTURING
    const contact = contactSchema.create({
        name: name,
        phone: phone,
        email: email

    })
    res.status(200).json({ "message": "Inserted " })
};


// UPDATE data from the database
const putContact = async (req, res) => {
    const checkContact =  contactSchema.findById(req.params.id);
    if (checkContact) {
        const updatedContact = await contactSchema.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        res.status(200).json({ updatedContact });
    }
    else {
        res.status(404);
    }
    //res.status(200).json({ "message": `updated for ${req.params.id}` })65a61d6de4501b0d519bf3d5
};




//Delete data from the database
const deleteContact = (req, res) => { res.status(200).json({ "message": `Deleted for ${req.params.id}` }) };


module.exports = { getContact, putContact, postContact, deleteContact };