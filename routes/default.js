// import express and create router
const express = require('express');
const router = express.Router();
let db = require('../db');

// location route 
router.get('/', (req, res) => {
    // Send index.ejs via ejs
    res.render('index', { title: 'Location Map' });
    // res.sendFile("D:\\Programmieren\\GitHub\\locationmap\\public\\index.html", { root: __dirname })
});

module.exports = router;