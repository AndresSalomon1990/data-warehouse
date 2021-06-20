# Data Warehouse
This is a full stack web app made with Express and EJS. It retrieves data from MongoDB Atlas.

It was build for a marketing company so they can manage all their contacts for the campaigns.

Basic users can perform CRUD actions over contacts, companies and regions. Admins can do users actions and CRUD over users.

## File structure
This project follows an MVC pattern.

```
data-warehouse
│   README.md
│   .env
│   server.js
│   package.json
│   package-lock.json
|   .gitignore
│
└───api
│   └─── api.js
│   │
│   └───controllers
│   │
│   └───docs
│   │
│   └───middlewares
│   │
│   └───routes
│   
└───models
|
└───views
|
└───public
```

## Techs used
1. Server
    - NodeJs v14.15.4
    - Express v4.17.1
2. Package manager
    - npm v6.14.10
3. Database
    - MongoDB
4. Views
    - EJS v3.1.6
    - Materialize.css & Sass
    - JQuery

## How to use it

This app was built to run on your own computer in: [http://localhost:5000/] 

*You can adapt it to run on a server.*

To start using it:

1. Navigate to './api/', find the '/create-admin' path, uncommented it and create an admin user to start (can be done with Postman or other tool you want). Then comment that line again. This is necessary as it uses JWT & cookies for authentication and authorization and the users can only be created once you are logged.

2. Install the dependencies listed in `package.json` with `npm install`.

3. Replace the .env variables with your owns. Also remove the '.sample'.

4. Start the server with the command:

`node server.js` or `nodemon server.js`

It runs in port 3000 by default.

5. Login with the user admin you create in step 1.

6. Then you can start navigating over the views and making request to the different paths. 

7. **Check the docs in**:

	[http://localhost.com:3000/docs]

Recommended steps to test it:
- Create admin with the hidden path (remember to comment it after)
- Login as admin
- Create regions, companies, contacts
- Create basic user to test the permissions

## App functionalities

1. Two types of users: admin and basic.
2. Authentication and authorization for (1) with JWT and cookies.
3. Web security with CORS and Helmet funcs.
4. CRUD over users.
5. CRUD over regions, countries and cities.
6. CRUD over companies.
7. CRUD over contacts.
8. Smart search and advanced search over the tables with pagination.
9. Possibility to export table data in several formats with several export options.
10. Manage several types of errors.