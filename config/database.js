//make sure you have mongoDB installed in your system.

const mongoose = require("mongoose");

const MONGOURI = "mongodb://localhost:27017/news_users"; //running on localhost
const MONGOURI_TEST = "mongodb://localhost:27017/news_users_test";

const startMongoServer = async () => {
    //console.log(process.env.TEST_ENV)
    try {  
        if(process.env.TEST_ENV = "test"){
        await mongoose.connect(MONGOURI_TEST, {
            useNewUrlParser: true //this will parse the mongoDB connection string
        });
        console.log("connected to mongo db test");
    }
    else{
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true //this will parse the mongoDB connection string
        });
        console.log("connected to mongo db");
    }
            
             } 
            catch (error) 
            {
            console.log(error)
            throw error;
             }
        };

module.exports = startMongoServer;