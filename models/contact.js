const Sequlize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Contact  = sequelize.define('contact', {
    id: {
        type: Sequlize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    contactNumber: {
        type: Sequlize.STRING,
        allowNull: false
        }
});

module.exports = Contact;