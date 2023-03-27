const router = require('express').Router();
const emailActivationService = require('../services/emailActivation');
const loginService = require('../services/login');
const registerService = require('../services/register');
const accessTokenService = require('../services/getAccessToken');
const forgetPasswordService = require('../services/forgetPassword');
const resetPasswordService = require('../services/resetPassword');
const authentication = require('../middleware/authentication');
const adminAuth = require('../middleware/admin-auth');
const logoutService = require('../services/logout');
const userService = require('../services/user');

// POST 

router.post('/register', registerService.register);
router.post('/activated', emailActivationService.activateAccount);
router.post('/login', loginService.login);
router.post('/refreshToken', accessTokenService.getAccessToken);
router.post('/forget_password', forgetPasswordService.forgetPassword);
router.post('/reset', authentication, resetPasswordService.resetPassword);
router.post('/logout', logoutService.logout);

// GET
router.get('/user_data', authentication, userService.getUserinformation);
router.get('/admin', authentication, adminAuth ,userService.getAllUserInformation);


module.exports = router;