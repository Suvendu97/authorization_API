
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const USER = require('../models/user');


// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'username',
    passReqToCallback: true
},
    function (req, username, password, done) {
        // find a user and establish the identity
        USER.findOne({ username: username }, function (err, user) {
            if (err) {
                console.log('Error finding user')
                return done(err);
            }

            if (!user || user.password != password) {
                console.log('Invalid Username/Password!');
                return done(null, false, {
                    message: 'Invalid Username or Password'
                });
            }

            else {
                console.log(user);
                return done(null, user, {
                    message: 'Logged in Successfully!'
                });
            }
        });
    }
));

module.exports = passport;