const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
<<<<<<< Updated upstream
    recievedMessage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sentMessage: {
<<<<<<< HEAD
        type: Sequelize.STRING,
=======
        type: Sequlize.STRING,
=======
    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
>>>>>>> Stashed changes
>>>>>>> 2f641e9d2ff9ad35696a822648f305a12810374d
        allowNull: false,
    }
});

module.exports = Message;