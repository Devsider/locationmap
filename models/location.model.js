module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        lat: {
            type: Sequelize.FLOAT
        },
        lon: {
            type: Sequelize.FLOAT
        },
        accuracy: {
            type: Sequelize.FLOAT
        },
        weight: {
            type: Sequelize.FLOAT
        }
    });

    return Location;
};