const express = require('express');
const UserRoute = require('./user');

const router = express.Router();

router.get("/", (req, res)=>{
    res.json("On /api/v1")
})

router.use('/user', UserRoute)

module.exports = router