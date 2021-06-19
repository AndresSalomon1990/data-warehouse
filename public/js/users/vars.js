// variables for creating users - used in create.js
const CREATE_USER_VARS = {
  form: document.getElementById('create-user-form'),
  nameError: document.getElementById('create-user-name-error'),
  lnameError: document.getElementById('create-user-lname-error'),
  emailError: document.getElementById('create-user-email-error'),
  passwordError: document.getElementById('create-user-password-error'),
  profileError: document.getElementById('create-user-profile-error')
};

// variables for editing users - used in edit.js
const EDIT_USER_VARS = {
  form: document.getElementById('edit-user-form'),
  nameError: document.getElementById('edit-user-name-error'),
  lnameError: document.getElementById('edit-user-lname-error'),
  emailError: document.getElementById('edit-user-email-error'),
  passwordError: document.getElementById('edit-user-password-error'),
  profileError: document.getElementById('edit-user-profile-error'),
  id: 0
};

// variables for deleting users - used in delete.js
const DELETE_USER_VARS = {
  deleteUserButton: document.getElementById('delete-user-button'),
  id: 0,
  deleteUserEmailConfirmation: document.getElementById('delete-user-email-confirmation')
};