const Sequelize = require('sequelize');


const sequelize = new Sequelize('node_complete', 'root', 'Divekar@210',
    {
        dialect: 'mysql',
        host: 'localhost'
    })

module.exports = sequelize