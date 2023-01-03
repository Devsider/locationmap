let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Database 
let db = require('./db');

require('dotenv').config();

// Routes
let routes = {
    location: require('./routes/location'),
    default: require('./routes/default')
}

// Configure routes
app.use('/location', routes.location);
app.use('/', routes.default);

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

