const router = require('express').Router();
const emailActivationService = require('../services/emailActivation');
const loginService = require('../services/login');
const registerService = require('../services/register');

router.post('/register', registerService.register);
router.post('/acitvated', emailActivationService.activateAccount);
router.post('/login', loginService.login);


module.exports = router;