
//15-01-2024


const mongoose = require("mongoose");

//create table
const contactSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name required"] },
    phone: { type: Number, required: [true, "Phone number is required"] },
    email: { type: String, required: [true, "Email is required"] }

},
    {
        timestamps : true,
    })

module.exports = mongoose.model("contactSchema",contactSchema);