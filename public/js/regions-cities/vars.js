/* REGION */
// variables for creating a region
const CREATE_REGION_VARS = {
  form: document.getElementById('create-region-form'),
  nameError: document.getElementById('create-region-name-error')
};

// variables for editing a region
const EDIT_REGION_VARS = {
  form: document.getElementById('edit-region-form'),
  nameError: document.getElementById('edit-region-name-error'),
  regionId: '',
  regionName: ''
};

// variables for deleting a region
const DELETE_REGION_VARS = {
  deleteRegionButton: document.getElementById('delete-region-button'),
  deleteRegionName: document.getElementById('delete-region-name'),
  regionId: '',
  regionName: ''
};

/* COUNTRY */
// variables for creating a country
const CREATE_COUNTRY_VARS = {
  form: document.getElementById('create-country-form'),
  nameError: document.getElementById('create-country-name-error'),
  regionId: '',
  regionName: ''
};

// variables for editing a country
const EDIT_COUNTRY_VARS = {
  form: document.getElementById('edit-country-form'),
  nameError: document.getElementById('edit-country-name-error'),
  countryId: '',
  countryName: '',
  regionName: ''
};

// variables for deleting a country
const DELETE_COUNTRY_VARS = {
  deleteCountryButton: document.getElementById('delete-country-button'),
  deleteCountryName: document.getElementById('delete-country-name'),
  countryId: '',
  countryName: ''
};

/* CITY */
// variables for creating a city
const CREATE_CITY_VARS = {
  form: document.getElementById('create-city-form'),
  nameError: document.getElementById('create-city-name-error'),
  countryId: '',
  countryName: ''
};

// variables for editing a city
const EDIT_CITY_VARS = {
  form: document.getElementById('edit-city-form'),
  nameError: document.getElementById('edit-city-name-error'),
  cityId: '',
  cityName: '',
  countryName: ''
};

// variables for deleting a city
const DELETE_CITY_VARS = {
  deleteCityButton: document.getElementById('delete-city-button'),
  deleteCityName: document.getElementById('delete-city-name'),
  cityId: '',
  cityName: ''
};