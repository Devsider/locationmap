// import express and create router
const express = require('express');
const router = express.Router();
let db = require('../db');

// location route 
router.get('/', (req, res) => {
    res.send('location route');
});

router.post('/', (req, res) => {
    let location = {
        latlong: req.query.latlong,
        accuracy: Number(req.query.accuracy)
    }

    console.log(location);

    db.models.location.create({
        latlong: location.latlong,
        accuracy: location.accuracy,
        userId: 1
    }).then((location) => {
        res.send(location);
    });
});

module.exports = router;