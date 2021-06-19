const express = require('express');
const router = express.Router();
const regionsCitiesControllers = require('../controllers/regions_cities_controllers');

// get the main page
router.get('/', regionsCitiesControllers.regions_cities_get);

/* REGION */
// get all regions, countries and cities
router.get('/regions', regionsCitiesControllers.regions_get);

// create region
router.post('/regions', regionsCitiesControllers.regions_post);

// edit region
router.put('/regions/:id', regionsCitiesControllers.regions_put);

// delete region
router.delete('/regions/:id', regionsCitiesControllers.regions_delete);

/* COUNTRY */
// get all countries
router.get('/countries', regionsCitiesControllers.countries_get);

// create country
router.post('/regions/:regionId/countries', regionsCitiesControllers.countries_post);

// edit country
router.put('/countries/:id', regionsCitiesControllers.countries_put);

// delete country
router.delete('/countries/:id', regionsCitiesControllers.countries_delete);

/* CITY */
// get all cities
router.get('/cities', regionsCitiesControllers.cities_get);

// create city
router.post('/countries/:countryId/cities', regionsCitiesControllers.cities_post);

// edit city
router.put('/cities/:id', regionsCitiesControllers.cities_put);

// delete city
router.delete('/cities/:id', regionsCitiesControllers.cities_delete);

module.exports = router;