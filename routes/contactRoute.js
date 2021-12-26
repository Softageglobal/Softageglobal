const express = require("express");
const router = express.Router();
const contact = require("../models/contact");




router.route("/create").post((req, res) => {
     fName = req.body.fName,
     lName = req.body.lName,
     Email = req.body.Email,
     phone = req.body.phone,
     massage = req.body.massage,
     newcontact = new contact({
        fName,
        lName,
        Email,
        phone,
        massage
    })

    newcontact.save();
})





module.exports = router;