
const express = require('express');
const app = express();
const sequelize = require('./util/database');
const books=require('./routes/routes')
const cors = require('cors')


app.use(cors())
app.use(express.json())


app.use('/book',books)


//this is to intialise database tables and then start the servers
sequelize.sync({})
    .then((result) => {

        app.listen(4000);
    })
    .catch((err) => {
        console.log(err);
    })
