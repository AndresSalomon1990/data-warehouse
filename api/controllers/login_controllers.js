const User = require('../../models/User');
const jwt = require('jsonwebtoken');

// handle login errors
const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // handle errors for the login
  if (err.message === 'Incorrect email and/or password') {
    errors.email = err.message;
    errors.password = err.message;
    return errors;
  };

  // validation error
  if (err.message.includes('user validation failed')) {
    // destructure the 'properties' property of error object, where you can find details about the error
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  };

  return errors;
};

/* Create token */
const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

/* Get the login page */
const login_get = (req, res) => {
  const token = req.cookies.jwt; // cookie-parser

  if (token) {
    res.redirect('/contacts');
  } else {
    res.status(200).render('login', { title: 'Login' });
  };
};

/* Handle the login submit */
const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password); // use the static method created for User model
    const token = createToken(user._id);
    // send the token in the cookie and send it to the browser
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000 // also 3 days, as the token
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

module.exports = {
  login_get,
  login_post
}