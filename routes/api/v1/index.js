const express = require("express");
const router = express.Router();

// route for users requests
router.use('/users', require('./users'));



module.exports = router;