const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const contactChannelSchema = new Schema({
  name: {
    type: String,
    enum: {
      values: ['Whatsapp', 'Facebook', 'Instagram', 'Twitter'],
      message: '{VALUE} is not supported for contact channels.'
    }
  },
  user_account: {
    type: String
  },
  preference: {
    type: String,
    enum: {
      values: ['Canal favorito', 'Sin preferencia', 'No molestar'],
      message: '{VALUE} is not supported for preference.'
    }
  }
});

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.']
  },
  lname: {
    type: String,
    required: [true, 'Last name cannot be blank.']
  },
  email: {
    type: String,
    required: [true, 'Please enter an email.'], // [value, custom error message]
    unique: true, // this error is handle with the error code
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email.'] // isEmail return true if it is a valid email or false if it is not
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company',
    required: [true, 'Company cannot be blank.']
  },
  position: {
    type: 'String',
    required: [true, 'Position cannot be blank.']
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
  },
  address: {
    type: String,
    required: [true, 'Address cannot be blank.']
  },
  interest: {
    type: Number,
    required: [true, 'Interest cannot be blank.']
  },
  contact_channels: [contactChannelSchema]
});

const Contact = mongoose.model('contact', contactSchema);

// to interact with the DB
module.exports = Contact;