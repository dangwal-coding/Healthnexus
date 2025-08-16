const mongoose = require('mongoose');
labTestSchema = mongoose.Schema({
    "testName": {
        type: String,
        required: true,
        unique: false
    },
    "imageUrl": {
        type: String,
        default: 'labtest.webp'
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
    }
})
const labTest = mongoose.model('labTest', labTestSchema);
module.exports = labTest;