const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const returns = sequelize.define('return', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    returndate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fine:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports=returns;