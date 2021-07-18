"use strict"

//libraries
const router = require('express').Router();
const studentController = require('../../student/studentController')
const passport = require('passport')



// router.get('/', userController.createUser);


//student Endpoint
router.post('/register', studentController.createStudent)// register student
router.post('/login', passport.authenticate('local',{session: false}), studentController.loginStudent)// login student
router.get('/logout', passport.authenticate('jwt',{session: false}), studentController.logoutStudent)// logout student





module.exports = router;