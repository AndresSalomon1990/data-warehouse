// AJAX request to fill the users table
function ajaxRequest(params) {
  const url = '/users/all';
  $.get(url).then(function (res) {
    
    const newRes = res.map(user => {
      user.profile = user.profile == 'admin' ? 'Admin' : 'Básico';
    });
    params.success(res);
  });
};

// Operators for edit and remove
function operateFormatter(value, row, index) {
  return [
    '<a class="edit waves-effect waves-light btn modal-trigger" href="#edit-user-modal" title="Editar">',
    '<i class="material-icons">create</i>',
    '</a>  ',
    '<a class="remove waves-effect waves-light btn modal-trigger red accent-2" href="#delete-user-modal" title="Eliminar">',
    '<i class="material-icons">clear</i>',
    '</a>'
  ].join('');
};

// asign functionality to operators
window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    EDIT_USER_VARS.id = row._id; // catch the user id to update their info
    EDIT_USER_VARS.form.name.value = row.name;
    EDIT_USER_VARS.form.lname.value = row.lname;
    EDIT_USER_VARS.form.email.value = row.email;
    EDIT_USER_VARS.form.profile.value = row.profile;
  },
  'click .remove': function (e, value, row, index) {
    DELETE_USER_VARS.id = row._id; // catch the user id to delete it
    DELETE_USER_VARS.deleteUserEmailConfirmation.innerText = row.email;
  }
};