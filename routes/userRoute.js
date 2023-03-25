const router = require('express').Router();
const emailActivation = require('../services/emailActivation');
const RegisterService = require('../services/register');

router.post('/register', RegisterService.register);
router.post('/acitvated', emailActivation.activateAccount);

module.exports = router;