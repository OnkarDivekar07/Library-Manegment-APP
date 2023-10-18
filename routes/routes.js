const express = require('express')

const router = express.Router();

const Controller = require('../controller/controller')


router.get('/', Controller.getbooks)


router.post('/addbook', Controller.postbooks)


router.post('/return', Controller.returnBook)




module.exports = router;