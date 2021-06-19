// variables for creating companies
const CREATE_COMPANY_VARS = {
  form: document.getElementById('create-company-form'),
  nameError: document.getElementById('create-company-name-error'),
  addressError: document.getElementById('create-company-address-error'),
  emailError: document.getElementById('create-company-email-error'),
  phoneError: document.getElementById('create-company-phone-error'),
  regionError: document.getElementById('create-company-region-error'),
  countryError: document.getElementById('create-company-country-error'),
  cityError: document.getElementById('create-company-city-error'),
  regionSelect: 'create-company-region-select',
  countrySelect: 'create-company-country-select',
  citySelect: 'create-company-city-select'
};

// variables for editing companies
const EDIT_COMPANY_VARS = {
  form: document.getElementById('edit-company-form'),
  nameError: document.getElementById('edit-company-name-error'),
  addressError: document.getElementById('edit-company-address-error'),
  emailError: document.getElementById('edit-company-email-error'),
  phoneError: document.getElementById('edit-company-phone-error'),
  regionError: document.getElementById('edit-company-region-error'),
  countryError: document.getElementById('edit-company-country-error'),
  cityError: document.getElementById('edit-company-city-error'),
  id: 0,
  regionSelect: 'edit-company-region-select',
  countrySelect: 'edit-company-country-select',
  citySelect: 'edit-company-city-select'
};

// variables for deleting companies
const DELETE_COMPANY_VARS = {
  deleteCompanyButton: document.getElementById('delete-company-button'),
  id: 0,
  deleteCompanyNameConfirmation: document.getElementById('delete-company-name-confirmation')
};