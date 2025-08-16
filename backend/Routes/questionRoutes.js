const express = require('express');
const router = express.Router();
const Question = require('../Models/Question');

// Get all unanswered questions
router.get('/unanswered', async (req, res) => {
    const questions = await Question.find({ status:'unanswered'});
    res.json(questions);
});

// Get all answered questions
router.get('/answered', async (req, res) => {
    const questions = await Question.find({ status:'answered'});
    res.json(questions);
});

// Add new question
router.post('/', async (req, res) => {
    // const question = new Question({message: req.body.message });
    // await question.save();
    // res.json({ message: 'Question added', question });
    const userMessage=req.body.message.trim();
    const answeredQuestion=await Question.findOne({
        message: {
            $regex:new RegExp('^'+userMessage+'$','i')
        },
        status:'answered'
    });
    if(answeredQuestion){
        return res.json({
            sender:'bot',
            text:answeredQuestion.adminReply,
        });
    }
    let existingUnanswered=await Question.findOne({
         message: {
            $regex:new RegExp('^'+userMessage+'$','i')
        },
        status:'unanswered'
        });
        if(!existingUnanswered){
    const question = new Question({
        message:userMessage,
        status:'unanswered'
    });
    await question.save();
        }
return res.json({
    sender:'bot',
    reply:"I've sent your query to our team.They'll get back to you shortly.",
    existing:false

});
});

// Edit question
// router.put('/:id', async (req, res) => {
//     const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
// });
router.put('/:id', async (req, res) => {
    const { message, adminReply, status } = req.body;
    const updateData = {};
    if (message !== undefined) updateData.message = message;
    if (adminReply !== undefined) updateData.adminReply = adminReply;
    if (status !== undefined) updateData.status = status;
    if (status === 'answered') {
        updateData.answeredAt = new Date();
    }

    const updated = await Question.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
});
    

// Delete question
router.delete('/:id', async (req, res) => {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted' });
});

module.exports = router;