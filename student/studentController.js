/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of Users/students /api-1
 * MVC - Controller to handle the login of Users/students /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

const Student = require('../models/Student');
const JWT = require('jsonwebtoken');
const passportConfig = require('../Middleware/auth');
const credentials = require('../Util/helper');





//controller to create student
exports.createStudent = async(req, res, next)=> {
 const {name, username, email, password, role} = req.body;
 Student.findOne({email}, (err, student)=> {
    if(err)
    res.status(500).json({message: {msgBody: "An error has  occurred"
                                    ,msgError: true}})
     if(student)
     res.status(400).json({message: {msgBody: "Username already exist"
                                    ,msgError: true}})
    else {
        const studentNew = new Student({name, username, email, password, role});
        studentNew.save((err, document)=> {
    if(err){
        res.status(500).json({message: {msgBody: "An error has occurred",msgError: true}})
    }else {
        res.status(201).json({message: {msgBody: "your account has been successfully created",msgError: false}})
    }
    })
 }
})

}


//controller to login student -2
exports.loginStudent = async(req, res, next)=> {
    if(req.isAuthenticated()){
        console.log(req.user);
        const {_id, name, username,email,password, role} = req.user; //return the object after comparing password form the auth
        const token = credentials.signJwt(_id); //sign the jwt
        res.cookie('access_token', token,{httpOnly: true, sameSite: true}); //httpOnly prevent against cross-site scripting attack on the client
                                                                         //sameSite prevent against cross site forgery attacks
    res.status(200).json({isAuthenticated: true,
                          student: {username, role}})                                                                     
}
}


//controller to logout student -2
exports.logoutStudent = async(req, res, next)=> {
          
        res.clearCookie('access_token'); // Clear the token so that the student will have to sign in again after he has logout
        res.json({user: {username: "", role: ""},
                          success: true});             
      
                                                             
        
}