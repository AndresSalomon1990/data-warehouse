const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: false
  },
  address: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: false
  },
  email: {
    type: String,
    required: [true, 'Please enter an email.'], // [value, custom error message]
    unique: true, // this error is handle with the error code
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email.'] // isEmail return true if it is a valid email or false if it is not
  },
  phone: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: true
  },
  region: {
    type: Schema.Types.ObjectId,
    ref: 'region',
    required: [true, 'Region cannot be blank.']
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'country',
    required: [true, 'Country cannot be blank.']
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'city',
    required: [true, 'City cannot be blank.']
  }
});

const Company = mongoose.model('company', companySchema);

// to interact with the DB
module.exports = Company;