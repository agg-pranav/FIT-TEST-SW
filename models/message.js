const Sequlize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Message = sequelize.define('message', {
    id: {
        type: Sequlize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
<<<<<<< Updated upstream
    recievedMessage: {
        type: Sequlize.STRING,
        allowNull: false,
    },
    sentMessage: {
        type: Sequlize.STRING,
=======
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
>>>>>>> Stashed changes
        allowNull: false,
    }
});

module.exports = Message;