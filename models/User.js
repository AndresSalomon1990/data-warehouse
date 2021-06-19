const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: false
  },
  lname: {
    type: String,
    required: [true, 'Last name cannot be blank.'],
    lowercase: false
  },
  email: {
    type: String,
    required: [true, 'Please enter an email.'], // [value, custom error message]
    unique: true, // this error is handle with the error code
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email.'] // isEmail return true if it is a valid email or false if it is not
  },
  password: {
    type: String,
    required: [true, 'Please enter a password.'],
    minlength: [6, 'Minimun password length is 6 characters.']
  },
  profile: {
    type: String,
    enum: {
      values: ['basic', 'admin'],
      message: '{VALUE} is not supported for profile.'
    },
    required: true,
    lowercase: true
  }
});

// Mongoose HOOK - add the salt to the password and the hash it before storing in the db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt); 
  next();
});

// Mongoose static method to login user - create a method to the User model
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email: email }); // check if the user exists in the db - this refer to the User model
  if (user) {
    // if the user exists by email, check if the password is correct
    const auth = await bcrypt.compare(password, user.password); // return true or false - it also hash the password from the db
    if (auth) return user;

    throw Error('Incorrect email and/or password');
  };
  throw Error('Incorrect email and/or password');
};

const User = mongoose.model('user', userSchema);

// to interact with the DB
module.exports = User;