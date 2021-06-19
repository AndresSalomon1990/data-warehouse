const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// use this middleware in any page that needs authentication
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt; // cookie-parser

  // check that jwt exist and is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        next();
      };
    });
  } else {
    res.redirect('/login');
  };
};

// check current user
const checkCurrentUser = (req, res, next) => {
  const token = req.cookies.jwt; // cookie-parser

  // check that jwt exist and is verified
  if (token) {
    // the secret should be in the env variables
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null; // important if the token isn't verified, to avoid errors in the views
        next(); // no matter the error, just move to the next middleware or step
      } else { 
        // here comes if there is a valid user
        const user = await User.findById(decodedToken.id);
        
        // with the user, we can pass it to our views with 'res.locals.xxxxxxxxxx' as a local variable for the current request
        res.locals.user = user;
        next();
      };
    });
  } else {
    res.locals.user = null; // important if the token doesn't exist, to avoid errors in the views
    next(); // no matter the error, just move to the next middleware or step
  };
};

module.exports = { requireAuth, checkCurrentUser };