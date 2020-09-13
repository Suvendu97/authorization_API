
# <span style="color:navy">Project Name:</span> *Authentication API*

## <span style="color:navy">Description:</span> It's an RESTful API using Node.js, express and MongoDB for the users Authentication and few other functions

  

## <span style="color:navy">Technologies:</span>

- Postman
- Node.js
- Express.js
- Passport.js 
- MongoDB
- Robo3T

## <span style="color:navy">Features:</span>

- Authentication
- User Sign In
- User Sign Up
- get own details
- get all User's details

## <span style="color:navy">How to set it up on your local Computer?</span>
1) Clone the Package to your local System
2) Navigate to the folder wherein the project has been cloned
3) Open Terminal and type `npm install` [Make sure node is already installed in your system!]
4) Type `npm start`
5) The app should run on default port 8000 or if you've mentioned env port it'll run on that.

## <span style="color:navy">Run and Test:</span>
Launch <span style="color:orange">Postman</span> and pass the below requests

|<span style="color:green">URL PATH</span>          |<span style="color:green">Request Type</span>|<span style="color:green">Description</span>| <span style="color:green">Field-Input Required</span> |
| :---                                             |    :----:                                  |        :---:                              |          ---:                              |
| localhost:8000/api/v1/users/signup         |POST                                        |create and register user                        | Body: name, username, password, confirm_password, email and select x-www-form-urlencoded|
| localhost:8000/api/v1/users/signin         |POST                                        |login the user in app  and generate jwt         |Body: username, password and select x-www-form-urlencoded. you will get your json webtoken|
| localhost:8000/api/v1/users/:id/userDetails|GET                                         |get all own Details                             |Headers: Authorization- Bearer yourJsonWebToken.. Params: Path Variables=> id-copy id from terminal or database|
| localhost:8000/api/v1/users/:id/allUser    |GET                                         |to get details of all  registered users         |Headers: Authorization- Bearer yourJsonWebToken.. Params: Path Variables=> id-copy id from terminal or database|

  
## <span style="color:navy">Project Setup:</span>

 

**<span style="color:darksalmon">Environment: </span>**  *Windows 10*
	
**<span style="color:darksalmon">NPM: </span>**
			

 - express
 - express-ejs-layouts
 - express-session
 - passport
 - passport-local
 - passport-jwt
 - mongoose
 - connect-mongo
 - jsonwebtoken
 
 
  Commands to start the server, to install node-package-manager are:
```
npm start
npm install "package-name"

```

**<span style="color:darksalmon">Other Applications: </span>**

 - Robo3T
 - Postman
 - vs code

## <span style="color:navy">Step By Step guide of developing:</span>

 - create index file(server entry point) for the project
 - install required npm
 - set up the directory folder structure (Config, controllers, models, routes)
   -   Config folder for database connection and authentication setup
   - Controllers folder for all controllers functions
   - routes folder for all routes
   - models folder for all models including my DB
- link the folders as required
- link mongoDB
- setup schema for models
- setup passport js and passport jwt
- create routes for the desired operations in the route folder
- create controllers for the desired operations in the controllers folder
- now the server will run with "nodemon index.js" command
- go to package.json => "scripts"  and write   "start": "nodemon index.js"   to change the run command from "nodemon index.js" to "npm start"


# Thank You
