const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Message;