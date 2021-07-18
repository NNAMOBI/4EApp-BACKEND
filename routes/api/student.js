"use strict"

//libraries
const router = require('express').Router();
const studentController = require('../../student/studentController')
const passport = require('passport')



// router.get('/', userController.createUser);


//student
router.post('/register', studentController.createStudent)// register student
router.post('/login', passport.authenticate('local',{session: false}), studentController.loginStudent)// login student






module.exports = router;