const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./helper/db');
const userRoute = require('./Routes/userRoute');
const chatbot = require('./Routes/chatbot');
const labTestRoute = require('./Routes/Labtest');
const medicineRoute = require('./Routes/Addmedi');
const multur = require('./config/multerconfig')
const path = require('path');
const AppointmentRouter = require('./Routes/appointmentRoutes');
const questionRoute = require('./Routes/questionRoutes');

const paymentRoutes = require('./Routes/payment');



dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use('/lab', labTestRoute);
app.use('/medicine', medicineRoute);
app.use('/public', express.static('public'));
app.use('/api/users', userRoute); // All users routes
app.use("/api/appointments", AppointmentRouter); //Appointment booking route
app.use('/chat', chatbot);
app.use('/api/questions',questionRoute);

app.use('/api/payment', paymentRoutes); 
app.use('/image/users', express.static('public/image/users'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
