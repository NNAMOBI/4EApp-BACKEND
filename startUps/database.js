const mongoose = require('mongoose');  // connection to the database;
require('dotenv').config();  //to check for environmental variables



const url = `mongodb://project:${process.env.PASSWORD}@4e-shard-00-00.haa9z.mongodb.net:27017,4e-shard-00-01.haa9z.mongodb.net:27017,4e-shard-00-02.haa9z.mongodb.net:27017/cpdApp?ssl=true&replicaSet=atlas-8wqabn-shard-0&authSource=admin&retryWrites=true&w=majority`;


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}


    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

