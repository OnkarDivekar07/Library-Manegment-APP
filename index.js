//require  imports for sever
const express = require('express');
const app = express();
const sequelize = require('./util/database');
const booktable = require('./model/booktable')
const returntable = require('./model/returntable')
const getbooks=require('./routes/getbooks')
const postbooks=require('./routes/postbooks')

app.use(getbooks)
app.use(postbooks)

returntable.belongsTo(booktable)

sequelize.sync()
    .then((result) => {

        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })
