const router = require('express').Router();
const RegisterService = require('../services/register');

router.post('/register', RegisterService.register);

module.exports = router;