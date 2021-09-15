const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js')
const {verifyLogin, verifyToken} = require('../middlewares/auth.middleware.js');
const SECRET = "123-456-789-987-654-321";

router.route('/signup')
  .post(async(req,res) => {
    try{
      const {username} = req.body
       const userName = await User.findOne({ username: username });
      if (userName) {
         throw new Error('Username Already exists, try another username');
      }
      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      res.status(200).json({success : true,
      message : "User signup successfully"})

    }catch(error){
      res.status(501).json({success : false ,
      message : "Error while sign up",
      errMessage : error.message})
    }
  });

 router.use(verifyLogin)
 router.route('/login')
    .post(async(req,res) => {
      try{
        const user = req.user
        const token = jwt.sign({userId : user._id}, SECRET, {expiresIn : "123h"})
        res.status(200).json({success : true,
        message : "successfully Login ",
        userId : user._id,
        username : user.username,
        token})      
      }catch(error){
        res.status(501).json({success : false,
        message : "Error while login"})
      }
    })

  module.exports = router