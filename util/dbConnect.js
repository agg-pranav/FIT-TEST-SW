const Sequlize = require('sequelize');
const keys = new (require('../config/keys')).db;

const sequelize = new Sequlize(
    keys.database,
    keys.user,
    keys.password,
    {
        host: keys.host,
        dialect: 'mysql'
    })

module.exports = sequelize;