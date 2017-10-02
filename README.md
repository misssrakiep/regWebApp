# RegistrationNumbersWebApplication

## Contents

* Project Overview

* Getting started on the Registration Numbers Web Application

* Creating you development environment

* Setting up the Application

* Running the app locally

* Version control

* Issues

--------

## -Project Overview:

This is a Registration Plate generating application. It allows a user to:

* Enter a Number Plate as well as the city where it is from which will be save together in the database

* The user can then filter through all the existing number plates by their city

## -Creating your development environment:
To create the perfect development environment it is assumed that you already have the following dependencies installed:

* Node JS

* npm

* A text editor of your choice

## -Getting started on the application:

To get started on editing and contributing to the Waiter Web Application you will need to clone the application repository from [GITHUB](https://github.com/)

### -Cloning the repository:

To clone the repository, copy and paste the following code into your terminal:

`$ git clone https://github.com/misssrakiep/regWebApp`

## -Setting up the application:

Change directories into the project folder. To install all the dependencies type or copy and paste `$ npm install` into our terminal.

```
"dependencies": {
  "body-parser": "^1.17.2",
  "express": "^4.15.4",
  "express-handlebars": "^3.0.0",
  "mongodb": "^2.2.31",
  "mongoose": "^4.11.6",
  "node-static": "^0.7.9",
}

```

Alternatively you could install the packages separately:



* [ExpressJS](https://expressjs.com/), a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

  `$ npm install express --save`

* [Mongo DB](https://www.mongodb.com/) ,a free and open-source cross-platform document-oriented database program.

  `$ npm install mongodb --save`

* [Mongoose](http://mongoosejs.com/),a straight-forward, schema-based solution to model your application data.

  `$ npm install mongoose --save`

* [Body-parser](https://www.npmjs.com/package/body-parser), extracts the entire body portion of an incoming request stream and exposes it on req.body .

  `$ npm install body-parser --save`

* [Node-static](https://www.npmjs.com/package/node-static), understands and supports conditional GET and HEAD requests.

  `$ npm install node-static --save`


## -Running the application locally:

To run the app on your local machine, type `$ nodemon` into your terminal. If, however, you do not have [Nodemon]() installed, type `$ node index.js`. If the app successfully starts up on your machine, you should see the following in your terminal:

```
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
mongodb://localhost:27017/regNumbers
App has started on port: 3006
We are connected to: mongodb://localhost:27017/regNumbers
```

## -Version control:

[Git](https://en.wikipedia.org/wiki/Git) is used for version control in this application.

##  -Known issues:

Currently the only known issue with the application is that the user is unable to view all the number plates in the database at the same time.
