const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/nutcrm";

try{
    mongoose.connect(url);
    console.log("mongodb connected");
}catch(error)
{
    console.log(error);
}
