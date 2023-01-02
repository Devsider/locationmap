module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        lonlat: {
            type: Sequelize.STRING
        },
        accuracy: {
            type: Sequelize.INTEGER
        }
    });

    return Location;
};