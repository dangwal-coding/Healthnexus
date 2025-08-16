const mongoose = require('mongoose');
userSchema = mongoose.Schema({
    "fullName": String,
    "dob": Date,
    "mobile": String,
    "email": {
     type:String,
     unique:true,
     required:true
    },
    "gender": String,
    "password": String,
    "type": {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient'
    },
    "speciality": {
        type: String,
        default: null
    },
    "d_id":{
        type:String,
        default:null
    },
    image: {
        type: String, // store file path or filename
        default: null
    },
    fee: {
        type: Number, // fee in INR
        default: 400,   // default ₹400
        min: 400,       // min ₹400
        max: 1000       // max ₹1000
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;