// module.exports = router;const express = require('express');
const express=require('express');
const router=express.Router();
const Question = require('../Models/Question');
    
router.post('/', async (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let reply = "";
  let status = 'unanswered';
  let adminReply = '';

  // Step 1: DB se check karo ki same message ka answer pehle se hai ya nahi
  const existingAnswered = await Question.findOne({
    message: { $regex: new RegExp(`^${req.body.message}$`, 'i') }, // exact case-insensitive match
    status: 'answered'
  });

  if (existingAnswered) {
    // Agar mila, to wahi reply bhej do, aur function yahin khatam
    return res.json({ reply: existingAnswered.adminReply });
  }

  // Step 2: Agar DB mein nahi mila, to aapka existing if-else logic chale
  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    reply = "Hi there! How can I help you?";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('emergency')) {
    reply = "Click 'Emergency Help or You can book an ambulance from 'Book Ambulance' section or call: 011-4055 4055";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('help')) {
    reply = "Sure, I'm here to assist you.";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('name')) {
    reply = "I'm ChatBot, your virtual assistant.";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('how to make an appointment') || userMessage.includes('book an appointment')||userMessage.includes('appointment')) {
    reply = "You can make an appointment by visiting the 'Doctors section and choosing your preferred time slot.";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('doctor') || userMessage.includes('consult')) {
    reply = "Please select the 'Find a doctor' option.";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('medicine') || userMessage.includes('pharmacy')) {
    reply = "Please select the 'Find a pharmacy' option.";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('ambulance') || userMessage.includes("need ambulance")) {
    reply = "You can book an ambulance from 'Book Ambulance' section or call: 011-4055 4055";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('health checkup') || userMessage.includes("lab test")) {
    reply = "Go to the health checkup section and there you will find details of lab tests , you can book any lab tests";
    status = 'answered';
    adminReply = reply;
  }
  else if (userMessage.includes('patient')) {
    reply = "Go to the patient section";
    status = 'answered';
    adminReply = reply;
  }
  else {
    reply = "I've sent your query to our team. They'll get back to you shortly.";
  }

  // Step 3: Naya record DB mein save karo
  const newQuestion = new Question({
    message: req.body.message,
    status: status,
    adminReply: adminReply
  });
  await newQuestion.save();

  // Step 4: reply bhej do
  res.json({ reply });
});


module.exports = router;