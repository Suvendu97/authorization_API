const USER = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { findOne } = require('../../../models/user');

// create user in db and register
module.exports.createUser = async function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        console.log('passwords did not match!');
        return res.json(422, {
            status: 422,
            message: 'passwords did not matched'
        });
    }

    try {

        let user = await USER.findOne({ username: req.body.username });

        if (!user) {
            let user1 = await USER.create(req.body);
            console.log('User Registered Successfully!');
            return res.json(200, {
                status: 200,
                message: 'User Registered Successfully!',
                data:{
                    user: {
                        _id: user1.id,
                        name: user1.name,
                        username: user1.username
                    }
                }
                
            })
        } else {
            console.log('User already exists!')
            return res.json(409, {
                status: 409,
                message: 'User already exists!',
                data: {
                    user: {
                        _id: user.id,
                        name: user.name,
                        username: user.username
                    }
                }
            })
        }

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }

}

// signing in user and creating token for him/her
module.exports.loginUser = async function(req, res) {

    try {
        let user = await USER.findOne({ username: req.body.username });

        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: 'Invalid username or password'
            });
        }
        
        return res.json(200, {
            message: 'Login Successful and here is your token',
            data: {
                jwtToken: jwt.sign(user.toJSON(), 'authenticationapi', { expiresIn: '400000' }) 
            } 
        });

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: "Internal Server Error"
        });
    }

}



// get own Details
module.exports.userDetails = async function (req, res) {
    try{
        // console.log('***********************************************************', req.params);
        let id = req.params.id;
        let user = USER.findById({id}, 'user date -_id');
        USER.findById(id, function(err, user) {
            if(user) {
                return res.json(200, {
                    status: 200,
                    message: 'Own Details:',
                    user: user
                });
            } else {
                return res.json(500, { 
                    status: 500,
                    message: 'User not found!'
                })
            }
        })

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
             
}


module.exports.allUser = async function (req, res) {
    try{
        let id = req.params.id;
        let user = USER.findById({id}, 'user date -_id');
        let allUser= await USER.find({});
        USER.findById(id, function(err, user) {
            if(user) {
                return res.json(200, {
                    status: 200,
                    message: 'All User Details:',
                    data: {
                        allUser:allUser
                    }
                });
            } else {
                return res.json(500, { 
                    status: 500,
                    message: 'User not found!'
                })
            }
        })

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
             
}