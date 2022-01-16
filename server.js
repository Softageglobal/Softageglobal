const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");



require("dotenv").config();


const app = express();
const port = process.env.PORT || 3001;





app.use(cors());
app.use(express.json());


const uri = process.env.DATABASE_URI;

mongoose.connect ("mongodb://innocent:stopasking@cluster0-shard-00-00.qmpan.mongodb.net:27017,cluster0-shard-00-01.qmpan.mongodb.net:27017,cluster0-shard-00-02.qmpan.mongodb.net:27017/_Contactssl=true&replicaSet=atlas-vc71sj-shard-0&authSource=admin&retryWrites=true&w=majority", 
err => {
    if(err) throw err;
    console.log("mongodb is connected");
})


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb database is connected")
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));

    })
}

const contactRoute = require("./routes/contactRoute");


app.use("/routes", contactRoute);

app.listen(port, () => {
    console.log(`exprss server is up: ${port}`);
});