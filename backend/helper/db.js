const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.url).then(()=>{
    console.log("Database connected successfully");
}).catch((e)=>{
    console.log("Database connection failed:", e);
});