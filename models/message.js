const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recievedMessage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sentMessage: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Message;