// AJAX request to fill the companies table
function ajaxRequest(params) {
  const url = '/companies/all';
  $.get(url).then(function (res) {
    params.success(res);
  });
};

// Operators for edit and remove
function operateFormatter(value, row, index) {
  return [
    '<a class="edit waves-effect waves-light btn modal-trigger" href="#edit-company-modal" title="Editar">',
    '<i class="material-icons">create</i>',
    '</a>  ',
    '<a class="remove waves-effect waves-light btn modal-trigger red accent-2" href="#delete-company-modal" title="Eliminar">',
    '<i class="material-icons">clear</i>',
    '</a>'
  ].join('');
};

// asign functionality to operators
window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    EDIT_COMPANY_VARS.id = row._id; // catch the company id to update their info
    EDIT_COMPANY_VARS.form.name.value = row.name;
    EDIT_COMPANY_VARS.form.address.value = row.address;
    EDIT_COMPANY_VARS.form.email.value = row.email;
    EDIT_COMPANY_VARS.form.phone.value = row.phone;

    /* fill selects for the first click */
    // region
    fillRegionSelect(EDIT_COMPANY_VARS.regionSelect, row.region.name);
    
    // the setTimeouts are necessary because the page loads faster than the selects filling up and getting the ids
    setTimeout(() => {
      // country
      const regionId = document.getElementById(EDIT_COMPANY_VARS.regionSelect).value;
      fillCountrySelect(EDIT_COMPANY_VARS.countrySelect, EDIT_COMPANY_VARS.citySelect, regionId, row.country.name);
    }, 500);
    
    setTimeout(() => {
      // city
      const regionId = document.getElementById(EDIT_COMPANY_VARS.regionSelect).value;
      const countryId = document.getElementById(EDIT_COMPANY_VARS.countrySelect).value;
      fillCitySelect(EDIT_COMPANY_VARS.citySelect, regionId, countryId, row.city.name);
    }, 1000);
    
    /* fill selects on change */
    document.getElementById(EDIT_COMPANY_VARS.regionSelect).addEventListener('change', () => {
      const regionId = document.getElementById(EDIT_COMPANY_VARS.regionSelect).value;

      fillCountrySelect(EDIT_COMPANY_VARS.countrySelect, EDIT_COMPANY_VARS.citySelect, regionId, row.country.name);
    });

    document.getElementById(EDIT_COMPANY_VARS.countrySelect).addEventListener('change', () => {
      const regionId = document.getElementById(EDIT_COMPANY_VARS.regionSelect).value;
      const countryId = document.getElementById(EDIT_COMPANY_VARS.countrySelect).value;

      fillCitySelect(EDIT_COMPANY_VARS.citySelect, regionId, countryId, row.city.name);
    });
  },
  'click .remove': function (e, value, row, index) {
    DELETE_COMPANY_VARS.id = row._id; // catch the company id to delete it
    DELETE_COMPANY_VARS.deleteCompanyNameConfirmation.innerText = row.name;
  }
};