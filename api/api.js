const express = require('express');
const apiRouter = express.Router();
const { requireAuth, checkCurrentUser } = require('./middlewares/authMiddleware');

/* Check user for every route */
apiRouter.use('*', checkCurrentUser); // apply this for every route

/* Check API status */
apiRouter.get('/status', (req, res) => {
  res.send('Data Warehouse API working correctly.');
});

/* Contacts default path */
apiRouter.get('/', (req, res) => res.redirect('/contacts'));

/* PATH /login */
const loginRouter = require('./routes/loginRouter.js');
apiRouter.use('/login', loginRouter);

/* PATH /users */
const usersRouter = require('./routes/usersRouter.js');
apiRouter.use('/users', requireAuth, usersRouter);

/* PATH /city-region */
const regionsCitiesRouter = require('./routes/regionsCitiesRouter.js');
apiRouter.use('/regions-cities', requireAuth, regionsCitiesRouter);

/* PATH /companies */
const companiesRouter = require('./routes/companiesRouter.js');
apiRouter.use('/companies', requireAuth, companiesRouter);

/* PATH /contacts */
const contactsRouter = require('./routes/contactsRouter.js');
apiRouter.use('/contacts', requireAuth, contactsRouter);

/* PATH /logout */
const logoutRouter = require('./routes/logoutRouter.js');
apiRouter.use('/logout', requireAuth, logoutRouter);

/* PATH /create-admin */
/* --------------------------------- IMPORTANT --------------------------------- */
/* Enable this route only the first time, to create and admin via POSTMAN and start operating. Then comment it. */
// apiRouter.use('/create-admin', userRouter);

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