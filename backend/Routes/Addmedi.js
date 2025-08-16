const express = require('express');
const MedicineRoute = express.Router();
const MedicineModel = require('../Models/Medicine');
const upload = require('../config/medimulter')
MedicineRoute.get('',async (req,res)=>{
    const medicines = await MedicineModel.find();
    res.json({ 'msg': 'success', "value": medicines });
})

MedicineRoute.post('/add',upload.single('image'),async(req,res)=>{
    if (req.file) {
      req.body.imageUrl = req.file.filename;
    }
    const medicine = await MedicineModel.create(req.body);
    res.json({ 'msg': 'success', "value": medicine });
})

// Update medicine
MedicineRoute.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.imageUrl = req.file.filename;
        }
        const updated = await MedicineModel.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );
        if (!updated) return res.status(404).json({ msg: 'not found' });
        res.json({ msg: 'success', value: updated });
    } catch (err) {
        res.status(500).json({ msg: 'error', error: err.message });
    }
});

// Delete medicine
MedicineRoute.delete('/:id', async (req, res) => {
    try {
        const deleted = await MedicineModel.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'not found' });
        res.json({ msg: 'deleted', value: deleted });
    } catch (err) {
        res.status(500).json({ msg: 'error', error: err.message });
    }
});
module.exports = MedicineRoute;