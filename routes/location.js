// import express and create router
const express = require('express');
const router = express.Router();
let db = require('../db');

// location route 
router.get('/', (req, res) => {
    res.send('location route');
});

router.get('/add', (req, res) => {
    let location = {
        lat: req.query.lat,
        lon: req.query.lon,
        accuracy: Number(req.query.accuracy)
    }

    // Check easy auth
    if(req.query.auth != "hehe123") {
        console.log("Wrong auth")
        res.send("Wrong auth");
        return;
    }

    if(
        !location.accuracy ||
        !location.lat ||
        !location.lon
    ) {
        console.log("Missing data")
        res.send("Missing data");
        return;
    }

    console.log(location);

    db.models.location.create({
        lat: location.lat,
        lon: location.lon,
        accuracy: location.accuracy,
        weight: 1,
        userId: 1
    }).then((location) => {
        res.send(location);
    }).catch((error) => {
        res.send(error);
        throw error;
    });
});

module.exports = router;