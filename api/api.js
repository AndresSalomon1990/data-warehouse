const express = require('express');
const apiRouter = express.Router();
const { requireAuth, checkCurrentUser } = require('./middlewares/authMiddleware');
const loginRouter = require('./routes/loginRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const regionsCitiesRouter = require('./routes/regionsCitiesRouter.js');
const companiesRouter = require('./routes/companiesRouter.js');
const contactsRouter = require('./routes/contactsRouter.js');
const logoutRouter = require('./routes/logoutRouter.js');

/* Check user for every route */
apiRouter.use('*', checkCurrentUser); // apply this for every route

/* Check API status */
apiRouter.get('/status', (req, res) => {
  res.send('Data Warehouse API working correctly.');
});

/* PATH /admin/create-admin */
/* --------------------------------- IMPORTANT --------------------------------- */
/* Enable this route only the first time, to create and admin via POSTMAN and start operating. Then comment it. */
/* You can create the following admin user:
  {
    "name": "admin",
    "lname": "admin",
    "email": "admin@mail.com",
    "password": "123456",
    "profile": "admin"
  }
*/
// apiRouter.use('/admin', usersRouter);

/* Contacts default path */
apiRouter.get('/', (req, res) => res.redirect('/contacts'));

/* PATH /login */
apiRouter.use('/login', loginRouter);

/* PATH /users */
apiRouter.use('/users', requireAuth, usersRouter);

/* PATH /city-region */
apiRouter.use('/regions-cities', requireAuth, regionsCitiesRouter);

/* PATH /companies */
apiRouter.use('/companies', requireAuth, companiesRouter);

/* PATH /contacts */
apiRouter.use('/contacts', requireAuth, contactsRouter);

/* PATH /logout */
apiRouter.use('/logout', requireAuth, logoutRouter);

/* Swagger */
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./docs/swaggerDefinition.js');

const options = {
  ...swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./api/docs/swaggerApis.js']
};

const swaggerSpec = swaggerJsDoc(options);

apiRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* Generate json from the docs */
apiRouter.get('/api-docs.json', (req, res) => {
  res.send(swaggerSpec);
});

module.exports = apiRouter;