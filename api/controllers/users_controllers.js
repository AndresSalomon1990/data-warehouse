const User = require('../../models/User');

// handle create user errors
const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { name: '', lname: '', email: '', password: '', profile: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = 'This email already exist.';
    return errors; // not necesary to check other errors
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

const users_get = async (req, res) => {
  const user = res.locals.user; // from the checkCurrentUser middleware

  // check if the user is an admin
  if (user.profile === 'admin') {
    try {
      const users = await User.find();
      res.status(200).render('users', { title: 'Users', users: users });
    } catch (err) {
      console.log(err);
      res.status(404).render('404', { title: '404' });
    };
  } else {
    console.log('Only admins can see users.');
    res.status(403).render('403', { title: '403' });
  };
};

const users_get_all = async (req, res) => {
  const user = res.locals.user; // from the checkCurrentUser middleware

  // check if the user is an admin
  if (user.profile === 'admin') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(404).json({ Error: err });
    };
  } else {
    console.log('Only admins can see users.');
    res.status(403).json({ Error: 'Forbidden' });
  };
};

/* Handle users creation */
const users_post = async (req, res) => {
  const user = res.locals.user; // from the checkCurrentUser middleware

  // check if the user is an admin
  if (user.profile === 'admin') {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ user: user._id });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors }); // send back the errors catched
    };
  } else {
    console.log('Only admins can create users.');
    res.status(403).render('403', { title: '403' });
  };
};

/* IMPORTANT */
/* Only use this the first time with the route /create-admin */
/* Handle users admin creation */
const users_post_admin = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle user update */
const users_put = async (req, res) => {
  const user = res.locals.user; // from the checkCurrentUser middleware
  
  // check if the user is an admin
  if (user.profile === 'admin') {
    const id = req.params.id;

    try {
      const oldUser = await User.findById(id);
      oldUser.name = req.body.name;
      oldUser.lname = req.body.lname;
      oldUser.email = req.body.email;
      oldUser.password = req.body.password;
      oldUser.profile = req.body.profile;

      const newUser = await oldUser.save();
      res.status(201).json({ user: newUser._id });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors }); // send back the errors catched
    };
  } else {
    console.log('Only admins can edit users.');
    res.status(403).render('403', { title: '403' });
  };
};

/* Handle deleting an user */
const users_delete = async (req, res) => {
  const user = res.locals.user; // from the checkCurrentUser middleware
  
  // check if the user is an admin
  if (user.profile === 'admin') {
    const id = req.params.id;

    try {
      const deletedUser = await User.findOneAndDelete({ _id: id });

      res.status(200).json({ user: deletedUser._id });
    } catch (err) {
      console.log(err);
      alert(err);
      res.status(404).render('404', { title: '404' });
    };
  } else {
    console.log('Only admins can delete users.');
    res.status(403).render('403', { title: '403' });
  };
};

module.exports = {
  users_get,
  users_get_all,
  users_post,
  users_post_admin,
  users_put,
  users_delete
};