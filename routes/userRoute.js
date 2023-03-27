const router = require('express').Router();
const emailActivationService = require('../services/emailActivation');
const loginService = require('../services/login');
const registerService = require('../services/register');
const accessTokenService = require('../services/getAccessToken');
const forgetPasswordService = require('../services/forgetPassword');
const resetPasswordService = require('../services/resetPassword');
const authentication = require('../middleware/authentication');

router.post('/register', registerService.register);
router.post('/acitvated', emailActivationService.activateAccount);
router.post('/login', loginService.login);
router.post('/refreshToken', accessTokenService.getAccessToken);
router.post('/forget_password', forgetPasswordService.forgetPassword);
router.post('/reset', authentication, resetPasswordService.resetPassword);



module.exports = router;