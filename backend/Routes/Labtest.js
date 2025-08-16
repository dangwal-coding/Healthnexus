const express = require('express');
const labTestRoute = express.Router();
const labTestModel = require('../Models/Labtest');
const upload = require('../config/multerconfig')

labTestRoute.get('',async (req,res)=>{
    const labTests = await labTestModel.find();
    res.json({ 'msg': 'success', "value": labTests });
})
labTestRoute.post('/add',upload.single('image'),async(req,res)=>{
    console.log(req.file);
    if (req.file) {
  req.body.imageUrl = req.file.filename;
}
    const labTest = await labTestModel.create(req.body);
    res.json({ 'msg': 'success', "value": labTest });
})
// Update lab test
labTestRoute.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.imageUrl = req.file.filename;
        }
        const updated = await labTestModel.findByIdAndUpdate(
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

// Delete lab test
labTestRoute.delete('/:id', async (req, res) => {
    try {
        const deleted = await labTestModel.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ msg: 'not found' });
        res.json({ msg: 'deleted', value: deleted });
    } catch (err) {
        res.status(500).json({ msg: 'error', error: err.message });
    }
});

module.exports = labTestRoute;