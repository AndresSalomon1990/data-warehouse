const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: false
  },
  country_id: {
    type: Schema.Types.ObjectId,
    ref: 'country',
    required: [true, 'Country cannot be blank.'],
  }
});

const countrySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    lowercase: false
  },
  cities: [{
    type: Schema.Types.ObjectId,
    ref: 'city'
  }],
  region_id: {
    type: Schema.Types.ObjectId,
    ref: 'region',
    required: [true, 'Region cannot be blank.'],
  }
});

const regionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be blank.'],
    unique: true,
    lowercase: false
  },
  countries: [{
    type: Schema.Types.ObjectId,
    ref: 'country'
  }]
});

const City = mongoose.model('city', citySchema);
const Country = mongoose.model('country', countrySchema);
const Region = mongoose.model('region', regionSchema);

// to interact with the DB
module.exports = { Region, Country, City };