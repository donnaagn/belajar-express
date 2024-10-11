var express = require('express');
var router = express.Router();
//import
const prodicontroller = require('../controllers/prodicontroller')
//pakai slash saja trs jngn lp tmbhi di app js
router.get('/',prodicontroller.prodi)

module.exports = router;