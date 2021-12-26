const mongoose = require("mongoose");

const contactSchema = {
    fName: String,
    lName: String,
    Email: String,
    phone: Number,
    massage: String
 }
 const contact = mongoose.model("contact", contactSchema);


 module.exports =contact;