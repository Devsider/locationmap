require('dotenv').config();

// Sequelize initialization with mysql
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

let db = {};

// Initialize models
db.models = {
    location: require('./models/location.model')(sequelize, Sequelize),
    user: require('./models/user.model')(sequelize, Sequelize)
}

// Create associations
db.models.location.belongsTo(db.models.user);
db.models.user.hasMany(db.models.location);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    //{ force: true }
    db.sequelize.sync().then(() => {
        console.log('Database & tables created!');
    });
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// db.models.location.create({
//     latlong: '123,456',
//     accuracy: 10,
//     creator: {
//         username: "test"
//     }
// })

// db.models.user.create({
//     username: "test",
//     email: "dawt@te.de",
//     password: "123"
// });

// Export sequelize for use in other files
module.exports = db;
