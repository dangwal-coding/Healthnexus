const mongoose = require('mongoose');
MedicineSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "turnaround": {
        type: String,
        required: true
    },
    "imageUrl": {
        type: String,
        default: 'tab.jpg'
    }
})
const Medicine = mongoose.model('Medicine', MedicineSchema);
module.exports = Medicine;