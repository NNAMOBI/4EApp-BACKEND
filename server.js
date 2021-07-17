/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: Msc project
 * 
 */



/**
 * server setup-1
 * installing libraries: - 2
 * initializing the port No -3
 * library to handle 404 errors -4
 * Middleware to parse data from the frontend to the body of the request- 5
 * calling the route that performs the model and controller in the MVC -6
 * allow for cross origin from the browser over http-7
 * starting up the database server -8
 * To create cookie sessions
 
 */

 

//importing / importing libraries-2
const { required } = require('@hapi/joi');
const express = require('express');
const app = express();
const http = require('http')
const {port} = require("./config");  // -3
const createError = require('http-errors');  // -4
// require('express-async-errors');
const cors = require('cors');  //-7
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');






//middleware to parse data in the body of the request  -5
app.use(cors());   //-7
app.use(express.json());   //4
app.use(express.urlencoded({extended: false}));
app.use(cookieParser()); //9



// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
//   });


//error handler
// app.use(errorHandler);


// Invoking All routes  -6
// require('./routes/api')(app);
require('./startUps/database')  // -8
// require('./app')





// starting the node server  -1
const startServer = async () => {
    app.listen(port, (err) => {
        if (err) {
            // logger.log(err.message);
            console.log(err.message);
            process.exit(1);
        }
        console.log('info', `Server now listening on port  ${port}`)
        // logger.log('info', `Server now listening on port  ${port}`);
    });
};
startServer();