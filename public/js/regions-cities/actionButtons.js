/* REGION */
// Edit region buttons
const editRegionButtons = document.querySelectorAll('.edit-region');
editRegionButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 12 ? pathLength = 1 : pathLength = 2;

    EDIT_REGION_VARS.regionName = event.path[pathLength].attributes['data-name'].value;
    EDIT_REGION_VARS.regionId = event.path[pathLength].attributes['data-id'].value;
    EDIT_REGION_VARS.form.name.value = capitalizeFirstLetter(EDIT_REGION_VARS.regionName);
    
    $('#edit-region-modal').modal('open'); // open the modal
  });
});

// Delete region buttons
const deleteRegionButtons = document.querySelectorAll('.delete-region');
deleteRegionButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 12 ? pathLength = 1 : pathLength = 2;

    DELETE_REGION_VARS.regionName = event.path[pathLength].attributes['data-name'].value;
    DELETE_REGION_VARS.regionId = event.path[pathLength].attributes['data-id'].value;
    DELETE_REGION_VARS.deleteRegionName.innerText = capitalizeFirstLetter(DELETE_REGION_VARS.regionName);

    $('#delete-region-modal').modal('open'); // open the modal
  });
});

/* COUNTRY */
// Create country buttons
const createCountryButtons = document.querySelectorAll('.create-country');
createCountryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 12 ? pathLength = 1 : pathLength = 2;

    CREATE_COUNTRY_VARS.regionId = event.path[pathLength].attributes['data-id'].value;
    CREATE_COUNTRY_VARS.regionName = event.path[pathLength].attributes['data-name'].value;
    CREATE_COUNTRY_VARS.form.region.value = capitalizeFirstLetter(CREATE_COUNTRY_VARS.regionName);

    $('#create-country-modal').modal('open'); // open the modal
  });
});

// Edit country buttons
const editCountryButtons = document.querySelectorAll('.edit-country');
editCountryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 15 ? pathLength = 1 : pathLength = 2;

    EDIT_COUNTRY_VARS.regionName = event.path[pathLength].attributes['data-regionName'].value;
    EDIT_COUNTRY_VARS.countryName = event.path[pathLength].attributes['data-name'].value;
    EDIT_COUNTRY_VARS.countryId = event.path[pathLength].attributes['data-id'].value;
    EDIT_COUNTRY_VARS.form.name.value = capitalizeFirstLetter(EDIT_COUNTRY_VARS.countryName);
    EDIT_COUNTRY_VARS.form.region.value = capitalizeFirstLetter(EDIT_COUNTRY_VARS.regionName);
    
    $('#edit-country-modal').modal('open'); // open the modal
  });
});

// Delete country buttons
const deleteCountryButtons = document.querySelectorAll('.delete-country');
deleteCountryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 15 ? pathLength = 1 : pathLength = 2;

    DELETE_COUNTRY_VARS.countryName = event.path[pathLength].attributes['data-name'].value;
    DELETE_COUNTRY_VARS.countryId = event.path[pathLength].attributes['data-id'].value;
    DELETE_COUNTRY_VARS.deleteCountryName.innerText = capitalizeFirstLetter(DELETE_COUNTRY_VARS.countryName);

    $('#delete-country-modal').modal('open'); // open the modal
  });
});

/* CITY */
const createCityButtons = document.querySelectorAll('.create-city');
createCityButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 15 ? pathLength = 1 : pathLength = 2;

    CREATE_CITY_VARS.countryId = event.path[pathLength].attributes['data-id'].value;
    CREATE_CITY_VARS.countryName = event.path[pathLength].attributes['data-name'].value;
    CREATE_CITY_VARS.form.country.value = capitalizeFirstLetter(CREATE_CITY_VARS.countryName);

    $('#create-city-modal').modal('open'); // open the modal
  });
});

// Edit city buttons
const editCityButtons = document.querySelectorAll('.edit-city');
editCityButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 18 ? pathLength = 1 : pathLength = 2;

    EDIT_CITY_VARS.countryName = event.path[pathLength].attributes['data-countryName'].value;
    EDIT_CITY_VARS.cityName = event.path[pathLength].attributes['data-name'].value;
    EDIT_CITY_VARS.cityId = event.path[pathLength].attributes['data-id'].value;
    EDIT_CITY_VARS.form.name.value = capitalizeFirstLetter(EDIT_CITY_VARS.cityName);
    EDIT_CITY_VARS.form.country.value = capitalizeFirstLetter(EDIT_CITY_VARS.countryName);
    
    $('#edit-city-modal').modal('open'); // open the modal
  });
});

// Delete city buttons
const deleteCityButtons = document.querySelectorAll('.delete-city');
deleteCityButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // avoid open the collapsible
    let pathLength;

    // Check if the button or the icon over the button is clicked
    event.path.length == 18 ? pathLength = 1 : pathLength = 2;

    DELETE_CITY_VARS.cityName = event.path[pathLength].attributes['data-name'].value;
    DELETE_CITY_VARS.cityId = event.path[pathLength].attributes['data-id'].value;
    DELETE_CITY_VARS.deleteCityName.innerText = capitalizeFirstLetter(DELETE_CITY_VARS.cityName);

    $('#delete-city-modal').modal('open'); // open the modal
  });
});