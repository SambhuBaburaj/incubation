var express = require('express');
const  AdminHome  = require('../controller/AdminHome');
var router = express.Router();
const loginHelper =require('../controller/adminLogin')
router.post('/login',loginHelper.login)
router.get('/tabledata',AdminHome.tableData)
router.get("/acceptrequest",AdminHome.accept)
router.get("/rejectrequest",AdminHome.Reject)
router.post('/bookslot',AdminHome.bookslot)


module.exports = router;
