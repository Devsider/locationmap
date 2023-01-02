// import express and create router
const express = require('express');
const router = express.Router();

// location route 
router.get('/', (req, res) => {
    res.send('location route');
});

router.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)

    let location = {
        lonlat: req.query.lonlat,
        accuracy: Number(req.query.accuracy)
    }
    req.db.models.location.create({
        lonlat: location.lonlat,
        accuracy: location.accuracy,
    }).then((location) => {
        res.send(location);
    });
});

module.exports = router;