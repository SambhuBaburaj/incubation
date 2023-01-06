var express = require('express');
var router = express.Router();
const LoginHelper=require('../controller/log_reg');
const  SlotRequest  = require('../controller/SloteRequest');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signin',LoginHelper.Register, function(req, res, next) {

});
router.post('/login',LoginHelper.Login)
router.post('/seatbooking',SlotRequest.Slot)
router.get('/seatrequest',SlotRequest.userRequest)
router.get('/withdraw',SlotRequest.withdrawal)
module.exports = router;
