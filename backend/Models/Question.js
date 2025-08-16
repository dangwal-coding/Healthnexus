const mongoose=require('mongoose');
const QuestionSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['unanswered','answered'],
        default:'unanswered'
    },
    answer:{
        type:String,
        default:''
    },
    adminReply:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    answeredAt:{
        type:Date
    }
});
module.exports=mongoose.model('Question',QuestionSchema);