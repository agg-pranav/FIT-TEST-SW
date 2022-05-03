const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Contact  = sequelize.define('contact', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    contactNumber: {
<<<<<<< HEAD
        type: Sequelize.STRING,
=======
<<<<<<< Updated upstream
        type: Sequlize.STRING,
>>>>>>> 2f641e9d2ff9ad35696a822648f305a12810374d
        allowNull: false
        },
    requests: {
        type: Sequelize.INTEGER,
        allowNull : false
=======
        type: Sequelize.STRING,
        allowNull: false,
>>>>>>> Stashed changes
    }
});

module.exports = Contact;