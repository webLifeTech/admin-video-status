const express = require('express')
const router = express.Router()
const airlinesModel = require('../model/airlines.model')

// For save airline
router.post('/save', async (req, res) => {
    try {
        console.log("req.body>>", req.body);
        const table = await new airlinesModel(req.body).save();
        res.json({
            data: table,
            status: true,
            msg: 'Airline added successfully'
        })
    } catch (error) {
        console.log("error>>", error);
        res.json({
            status: false,
            msg: 'Something went Wrong',
            error: error
        })
    }
})

// For get all airline
router.get('/get-all', async (req, res) => {
    try {
        const data = await airlinesModel.find().sort('createdAt');
        res.json({
            data: data,
            status: true,
            msg: 'Success'
        })
    } catch (error) {
        console.log("error>>", error);
        res.json({
            status: false,
            msg: 'Something went Wrong',
            error: error
        })
    }
})

// For get single airline by id
router.get('/get-byid/:airlineId', async (req, res) => {
    try {
        console.log("airlineId>>>", req.params.airlineId)
        const data = await airlinesModel.findOne({
            _id: req.params.airlineId
        }).sort('createdAt');
        console.log("data>>>>", data);
        res.json({
            data: data,
            status: true,
            msg: 'Success'
        })
    } catch (error) {
        console.log("error>>", error);
        res.json({
            status: false,
            msg: 'Something went Wrong',
            error: error
        })
    }
})

// For update airline
router.put('/update', async (req, res) => {
    try {
        console.log("req.body>>>", req.body);
        const data = await airlinesModel.updateOne({
            _id: req.body._id
        }, req.body);
        console.log("data>>>", data);

        res.json({
            status: true,
            msg: 'Airline updated successfully'
        })
    } catch (error) {
        console.log("error>>", error);
        res.json({
            status: false,
            msg: 'Something went Wrong',
            error: error
        })
    }
})

// For delete airline
router.delete('/delete/:airlineId', async (req, res) => {
    try {
        const data = await airlinesModel.deleteOne({
            _id: req.params.airlineId
        })
        res.json({
            status: true,
            msg: 'Airline has been deleted successfully'
        })
    } catch (error) {
        console.log("error>>", error);
        res.json({
            status: false,
            msg: 'Something went Wrong',
            error: error
        })
    }
})

module.exports = router