const router = require('express').Router();
const uploadAuth = require('../middleware/upload-auth');
const authentication = require('../middleware/authentication');
const uploadService = require('../services/upload');

router.post('/upload', authentication, uploadAuth, uploadService.uploadImage);


module.exports = router;