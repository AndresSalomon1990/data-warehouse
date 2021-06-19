// variables for creating contacts
const CREATE_CONTACT_VARS = {
  form: document.getElementById('create-contact-form'),
  nameError: document.getElementById('create-contact-name-error'),
  lnameError: document.getElementById('create-contact-lname-error'),
  emailError: document.getElementById('create-contact-email-error'),
  companyError: document.getElementById('create-contact-company-error'),
  positionError: document.getElementById('create-contact-position-error'),
  regionError: document.getElementById('create-contact-region-error'),
  countryError: document.getElementById('create-contact-country-error'),
  cityError: document.getElementById('create-contact-city-error'),
  addressError: document.getElementById('create-contact-address-error'),
  companySelect: 'create-contact-company-select',
  regionSelect: 'create-contact-region-select',
  countrySelect: 'create-contact-country-select',
  citySelect: 'create-contact-city-select'
};

// variables for creating contacts
const EDIT_CONTACT_VARS = {
  form: document.getElementById('edit-contact-form'),
  nameError: document.getElementById('edit-contact-name-error'),
  lnameError: document.getElementById('edit-contact-lname-error'),
  emailError: document.getElementById('edit-contact-email-error'),
  companyError: document.getElementById('edit-contact-company-error'),
  positionError: document.getElementById('edit-contact-position-error'),
  regionError: document.getElementById('edit-contact-region-error'),
  countryError: document.getElementById('edit-contact-country-error'),
  cityError: document.getElementById('edit-contact-city-error'),
  addressError: document.getElementById('edit-contact-address-error'),
  companySelect: 'edit-contact-company-select',
  regionSelect: 'edit-contact-region-select',
  countrySelect: 'edit-contact-country-select',
  citySelect: 'edit-contact-city-select',
  id: 0
};

// variables for deleting contacts
const DELETE_CONTACT_VARS = {
  deleteContactButton: document.getElementById('delete-contact-button'),
  id: 0,
  deleteContactEmailConfirmation: document.getElementById('delete-contact-email-confirmation'),
  deleteManyContactsButton: document.getElementById('delete-many-contact-button')
};