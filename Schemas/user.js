const mongoose=require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

 
const { Schema } = mongoose;

const UserSchema = new Schema({
    _id:Number,
    userName:String,
    phoneNumber:Number,
    otp:Number
})
UserSchema.plugin(AutoIncrement);

module.exports = mongoose.model('UserSchema', UserSchema )