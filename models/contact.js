const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Contact  = sequelize.define('contact', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    contactNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Contact;