const express = require('express');
const router = express.Router()
const usersModel = require('../model/users.model')

// For save user
router.post('/login', async (req, res) => {
    try {
        console.log("req.body>>", req.body);
        const isUserExist = await usersModel.findOne({
            email: req.body.email
        })

        if (isUserExist && isUserExist._id) {
            return res.json({
                data: isUserExist,
                status: true,
                msg: 'You are now logged in.'
            })
        }

        const table = await new usersModel(req.body).save();
        res.json({
            data: table,
            status: true,
            msg: 'You are now logged in.'
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