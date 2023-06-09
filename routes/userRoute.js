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
const settingService = require('../services/setting');
const AdminModule = require('../services/AdminModule');

// POST 

router.post('/register', registerService.register);
router.post('/activated', emailActivationService.activateAccount);
router.post('/login', loginService.login);
router.post('/refreshToken', accessTokenService.getAccessToken);
router.post('/forget_password', forgetPasswordService.forgetPassword);
router.post('/reset', authentication, resetPasswordService.resetPassword);

// ADMIN create 
router.post('/createUser', AdminModule.createUser);
router.patch('/updateUser/:id', authentication, adminAuth, AdminModule.updateUser);

// GET
router.get('/logout', logoutService.logout);
router.get('/user_data', authentication, userService.getUserinformation);
router.get('/admin', authentication, adminAuth ,userService.getAllUserInformation);

// PATCH
router.patch('/setting', authentication, settingService.updateData);
// router.patch('/update_all/:id', authentication, adminAuth ,settingService.updateData);
router.patch('/update_role/:id', authentication, adminAuth ,settingService.updateRole);

// DELETE
router.delete('/delete/:id', authentication, adminAuth, settingService.deleteUser);


module.exports = router;