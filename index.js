require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//express routers
const odotymRouter = require("./usecases/odotym/router")


//db connection
try {
    mongoose.connect(process.env.DB_URI);
}catch(e){
    throw new Error(e);
}


//hobby-express app config

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use("/odotym", odotymRouter);


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port`, process.env.PORT);
})