const express = require("express");
const router = express.Router();
const passport = require("passport");

const userRequests = require('../../../controllers/api/v1/userApi');

// post req for signing up user
router.post('/signup', userRequests.createUser);

// authenticated sign in request for user
router.post('/signin', passport.authenticate('local', { session:false}), userRequests.loginUser);

router.get('/:id/userDetails', passport.authenticate('jwt', { session: false }), userRequests.userDetails );
router.get('/:id/allUser', passport.authenticate('jwt', { session: false }), userRequests.allUser );


module.exports = router;