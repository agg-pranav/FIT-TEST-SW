const Sequlize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Model = sequelize.define('message', {
    id: {
        type: Sequlize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recievedMessage: {
        type: Sequlize.STRING,
        allowNull: false,
    },
    sentMessage: {
        type: Sequlize.STRING,
        allowNull: false,
    }
});

module.exports = Model;