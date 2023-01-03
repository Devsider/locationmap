module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        latlong: {
            type: Sequelize.STRING
        },
        accuracy: {
            type: Sequelize.INTEGER
        },
        weight: {
            type: Sequelize.INTEGER
        }
    });

    return Location;
};