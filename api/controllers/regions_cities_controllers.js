const { Region, Country, City, Location } = require('../../models/Region');
const mongoose = require('mongoose');

// handle create contact errors
const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { name: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.name = 'This region already exist.';
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

/* REGION */
/* Get the city-region page */
const regions_cities_get = async (req, res) => {
  try {
    const regions = await Region.find().populate({
      path: 'countries',
      // Get the cities
      populate: { path: 'cities' }}).exec();

    res.status(200).render('regions-cities', { title: 'Regions / Cities', regions: regions });
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* Get all regions, countries and cities */
const regions_get = async (req, res) => {
  try {
    const regions = await Region.find().populate({
      path: 'countries',
      // Get the cities
      populate: { path: 'cities' }}).exec();
    
    res.status(200).json(regions);
  } catch(err) { 
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  }
};

/* Handle region creation */
const regions_post = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).json({ region: region });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle region update */
const regions_put = async (req, res) => {
  const id = req.params.id;

  try {
    const oldRegion = await Region.findById(id);
    oldRegion.name = req.body.name;

    const newRegion = await oldRegion.save();
    res.status(201).json({ region: newRegion._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle deleting a region */
const regions_delete = async (req, res) => {
  const id = req.params.id;

  try {
    const regionToDelete = await Region.findById(id);

    // Check if the country has cities associated
    if (regionToDelete.countries.length > 0) {
      res.status(400).json({ errorCountries: 'No se puede eliminar la región porque tiene países asociados.' });
      return;
    };

    const deletedRegion = await Region.deleteOne({ _id: regionToDelete._id });

    res.status(200).json(deletedRegion);
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* COUNTRY */
/* Get all countries */
const countries_get = async (req, res) => {
  try {
    const countries = await Country.find();
    
    res.status(200).json(countries);
  } catch(err) { 
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  }
};

/* Handle country creation */
const countries_post = async (req, res) => {
  const regionId = req.params.regionId;
  
  try {
    const country = await Country.create(req.body);
    const region = await Region.findById(regionId);
    region.countries.push(country._id);
    const regionUpdated = await region.save();
    res.status(201).json({ country: country, regionUpdated: regionUpdated });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle country update */
const countries_put = async (req, res) => {
  const id = req.params.id;

  try {
    const oldCountry = await Country.findById(id);
    
    oldCountry.name = req.body.name;

    const newCountry = await oldCountry.save();
    res.status(201).json({ country: newCountry._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle deleting a country */
const countries_delete = async (req, res) => {
  const id = req.params.id;

  try {
    const countryToDelete = await Country.findById(id);
    const associatedRegion = await Region.findById(countryToDelete.region_id);

    // Check if the country has cities associated
    if (countryToDelete.cities.length > 0) {
      res.status(400).json({ errorCities: 'No se puede eliminar el país porque tiene ciudades asociadas.' });
      return;
    };

    // remove the country in the countries array of the associated region
    const countryIndex = associatedRegion.countries.indexOf(mongoose.Types.ObjectId(countryToDelete._id));
    if (countryIndex > -1) associatedRegion.countries.splice(countryIndex, 1);
    const regionUpdated = await associatedRegion.save();

    const deletedCountry = await Country.deleteOne({ _id: countryToDelete._id });

    res.status(200).json(deletedCountry);
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

/* CITY */
/* Get all cities */
const cities_get = async (req, res) => {
  try {
    const cities = await City.find();
    
    res.status(200).json(cities);
  } catch(err) { 
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  }
};

/* Handle city creation */
const cities_post = async (req, res) => {
  const countryId = req.params.countryId;

  try {
    const city = await City.create(req.body);
    const country = await Country.findById(countryId);
    country.cities.push(city._id);
    const countryUpdated = await country.save();
    res.status(201).json({ city: city, countryUpdated: countryUpdated });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle city update */
const cities_put = async (req, res) => {
  const id = req.params.id;

  try {
    const oldCity = await City.findById(id);
    oldCity.name = req.body.name;

    const newCity = await oldCity.save();
    res.status(201).json({ city: newCity._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // send back the errors catched
  };
};

/* Handle deleting a city */
const cities_delete = async (req, res) => {
  const id = req.params.id;

  try {
    const cityToDelete = await City.findById(id);
    const associatedCountry = await Country.findById(cityToDelete.country_id);

    // remove the city in the cities array of the associated country
    const cityIndex = associatedCountry.cities.indexOf(mongoose.Types.ObjectId(cityToDelete._id));
    if (cityIndex > -1) associatedCountry.cities.splice(cityIndex, 1);
    const countryUpdated = await associatedCountry.save();

    const deletedCity = await City.deleteOne({ _id: cityToDelete._id });

    res.status(200).json(deletedCity);
  } catch (err) {
    console.log(err);
    res.status(404).render('404', { title: '404' });
  };
};

module.exports = {
  regions_cities_get,
  regions_get,
  regions_post,
  regions_put,
  regions_delete,
  countries_get,
  countries_post,
  countries_put,
  countries_delete,
  cities_get,
  cities_post,
  cities_put,
  cities_delete
};