
//04-01-2024

const getContact = (req,res)=>{res.status(200).json({"message":"get all contacts"})};

const postContact = (req, res) => { res.status(200).json({ "message": `created contact ${req.body.name}` }) };

const putContact = (req, res) => { res.status(200).json({ "message": `updated for ${req.params.id}` }) };

const deleteContact = (req, res) => { res.status(200).json({ "message": `Deleted for ${req.params.id}` }) };


module.exports = {getContact, putContact, postContact, deleteContact};