const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;




app.use(cors());
app.use(express.json());



mongoose.connect("mongodb://innocent:stopasking@cluster0-shard-00-00.qmpan.mongodb.net:27017,cluster0-shard-00-01.qmpan.mongodb.net:27017,cluster0-shard-00-02.qmpan.mongodb.net:27017/_Contactssl=true&replicaSet=atlas-vc71sj-shard-0&authSource=admin&retryWrites=true&w=majority", 
(err) => {
    if (err) return console.log("error here " + err);
    console.log("connect to mongodg")
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));

    })
}
app.use("/", require("./routes/contactRoute"));

app.listen(3001, () => {
    console.log("exprss server is up");
});