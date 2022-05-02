const Sequlize = require('sequelize');
const keys =  require('../config/keys').db;

console.log(keys)
const sequelize = new Sequlize(
    keys.database,
    keys.user,
    keys.password,
    {
        host: keys.host,
        dialect: 'mysql'
    })

module.exports = sequelize;