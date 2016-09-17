var router = require('express').Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var authCtrl = require('../controllers/authentication')
var profileCtrl = require('../controllers/profile')
router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/profile', auth, profileCtrl.profileRead)

module.exports = router;
