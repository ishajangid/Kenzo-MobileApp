const router = require('express').Router();
const UserController = require('../Controller/user.controller');
router.post('/signin', UserController.register);
router.post("/login", UserController.login);
router.post("/data", UserController.getProfile);
router.post("/editData", UserController.changeData);
module.exports = router;