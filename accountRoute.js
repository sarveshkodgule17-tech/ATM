const express = require("express");
const router = express.Router();
const accountController = require('../controller/accountController');

// Create a new account
router.post("/", accountController.createAccount);

module.exports = router;
