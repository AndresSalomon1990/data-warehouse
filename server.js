const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require('express-rate-limit');
const favicon = require('serve-favicon');

/* CORS */
const isProduction = process.env.NODE_ENV === 'production';
const origin = {
  origin: isProduction ? 'https://www.data-clients-warehouse.com' : 'http://localhost:3000/',
};

/* Limit to 10 wrong login in a row */
const apiLimiterLogin = rateLimit({
  max: 10
});

/* Middlewares */
app.use(compression());
app.use(cors(origin));
app.use(helmet.hsts());
app.use(helmet.expectCt());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy()); // only for Express
app.use(helmet.xssFilter());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/login', apiLimiterLogin);
app.use(cookieParser()); // access a cookie method in the response object
app.use(express.static( __dirname + "/public"));
app.use(favicon(path.join(__dirname, "/public/images/logos/favicon.ico")));

/* PORT - 5000 default for localhost */
const PORT = process.env.PORT || 5000;

/* View engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Connect to MongoDB Atlas and if success, launch the server */
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(PORT, () => {
      console.log(`Server listen at port: ${PORT}`);
    }))
  .catch((err) => console.log(err));

/* All the routes */
const apiRouter = require('./api/api.js');
app.use('/', apiRouter);

/* Render 404 for any other route */
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});