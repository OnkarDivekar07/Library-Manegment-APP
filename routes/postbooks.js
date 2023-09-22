const express = require('express');
const router = express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');
const controller = require('../controller/controller');


//middlewares
router.use(bodyparse.json());
router.use(cors());



router.post('/postbooks', controller.postbooks)





module.exports = router;