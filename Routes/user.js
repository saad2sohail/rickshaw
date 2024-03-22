var express = require('express');
var router = express.Router();

const UserSchema =require('../Schemas/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// New Login
router.post('/login',(req,res)=>{
    try{
      const otp = 1234
      const user = new UserSchema({
        userName : '',
        phoneNumber : req.body.phoneNumber,
        otp : otp,
      })
      user.save();
      res.status(200).send({
          status:true,
          result : {
            message : 'User Login Successfull',
            otp: otp
          }
      })
    }
    catch({name,error}){
        res.status(500).send({
          status:false,
          result : {
            message : 'Something went wrong, Please try again.',
          }
      })
    }
})
// Validate the Otp find by the phone number
router.post('/validateOtp',(req,res)=>{
  
  var phoneNumber = req.body.phoneNumber;
  var otp = req.body.otp;

  UserSchema.findOne({phoneNumber : phoneNumber}).then((obj)=>{
    if(obj){
      if(obj.otp == otp){
        res.status(200).send({
          status : true,
          result : {
            message : 'Login Success'
          }
        })
      }
      else{
        res.status(403).send({
          status : false,
          result : {
            message : 'Invalid Otp'
          }
        })
      }
    }
    else{
      res.status(403).send({
        status : false,
        result : {
          message : 'Phone Number not found'
        }
      })
    }
  }).catch(error=>{
    res.status(500).send({
      status : false,
      result : {
        message : 'Something went wrong, Please try again.'
      }
    })
  })
})
module.exports = router;
