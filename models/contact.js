const Sequlize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Contact  = sequelize.define('contact', {
    id: {
        type: Sequlize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    contactNumber: {
<<<<<<< Updated upstream
        type: Sequlize.STRING,
        allowNull: false
        },
    requests: {
        type: Sequlize.INTEGER,
        allowNull : false
=======
        type: Sequelize.STRING,
        allowNull: false,
>>>>>>> Stashed changes
    }
});

module.exports = Contact;