/* Region select */
const fillRegionSelect = async (regionSelectId, regionSelected) => {
  try {
    const response = await fetch('/regions-cities/regions');
    const regions = await response.json();
    const regionSelect = document.getElementById(regionSelectId);

    clearRegionSelect(regionSelectId); // clear the select on change

    let i = 0;
    let option = '';
    for (i; i < regions.length; i++) {
      if (regions[i].name == regionSelected) {
        option = `<option value="${regions[i]._id}" selected>${regions[i].name}</option>`;
      } else {
        option = `<option value="${regions[i]._id}">${regions[i].name}</option>`;
      };      
      regionSelect.insertAdjacentHTML('beforeend', option);
    };

    $('#' + regionSelectId).formSelect(); // refresh the select - has to be done with JQuery with Materialize
  } catch(err) {
    console.log(err);
  };
};

/* Country select */
const fillCountrySelect = async (countrySelectId, citySelectId, regionId, countrySelected) => {
  try {
    const response = await fetch('/regions-cities/regions');
    const regions = await response.json();
    const regionIndex = regions.findIndex(region => region._id == regionId);
    const region = regions[regionIndex];
    const countrySelect = document.getElementById(countrySelectId);
    const citySelect = document.getElementById(citySelectId);

    clearCountrySelect(countrySelectId); // clear the select on change

    let i = 0;
    let option = '';
    for (i; i < region.countries.length; i++) {
      if (region.countries[i].name == countrySelected) {
        option = `<option value="${region.countries[i]._id}" selected>${region.countries[i].name}</option>`;
      } else {
        option = `<option value="${region.countries[i]._id}">${region.countries[i].name}</option>`;
      };      
      countrySelect.insertAdjacentHTML('beforeend', option);
    };

    countrySelect.disabled = false;
    clearCitySelect(citySelectId);
    citySelect.disabled = true;

    $('#' + countrySelectId).formSelect(); // refresh the select - has to be done with JQuery with Materialize
    $('#' + citySelectId).formSelect(); // refresh the select - has to be done with JQuery with Materialize
  } catch(err) {
    console.log(err);
  };
};

/* City select */
const fillCitySelect = async (citySelectId, regionId, countryId, citySelected) => {
  try {
    const response = await fetch('/regions-cities/regions');
    const regions = await response.json();
    const regionIndex = regions.findIndex(region => region._id == regionId);
    const region = regions[regionIndex];
    const countryIndex = region.countries.findIndex(country => country._id == countryId);
    const country = region.countries[countryIndex];
    const citySelect = document.getElementById(citySelectId)

    clearCitySelect(citySelectId); // clear the select on change

    let i = 0;
    let option = '';
    for (i; i < country.cities.length; i++) {
      if (country.cities[i].name == citySelected) {
        option = `<option value="${country.cities[i]._id}" selected>${country.cities[i].name}</option>`;
      } else {
        option = `<option value="${country.cities[i]._id}">${country.cities[i].name}</option>`;
      };      
      citySelect.insertAdjacentHTML('beforeend', option);
    };

    citySelect.disabled = false;
    $(`#${citySelectId}`).formSelect(); // refresh the select - has to be done with JQuery with Materialize
  } catch(err) {
    console.log(err);
  };
};

const clearRegionSelect = (regionSelectId) => {
  const regionSelect = document.getElementById(regionSelectId);
  regionSelect.innerHTML = ""; // clear the select on change
  const chooseRegionOption = '<option value="" disabled selected>Elija una región</option>';
  regionSelect.insertAdjacentHTML('beforeend', chooseRegionOption);
};

const clearCountrySelect = (countrySelectId) => {
  const countrySelect = document.getElementById(countrySelectId);
  countrySelect.innerHTML = ""; // clear the select on change
  const chooseCountryOption = '<option value="" disabled selected>Elija un país</option>';
  countrySelect.insertAdjacentHTML('beforeend', chooseCountryOption);
};

const clearCitySelect = (citySelectId) => {
  const citySelect = document.getElementById(citySelectId);
  citySelect.innerHTML = ""; // clear the select on change
  const chooseCityOption = '<option value="" disabled selected>Elija una ciudad</option>';
  citySelect.insertAdjacentHTML('beforeend', chooseCityOption);
};

/* Company select */
const fillCompanySelect = async (companySelectId, companySelected) => {
  try {
    const response = await fetch('/companies/all');
    const companies = await response.json();
    const companiesSelect = document.getElementById(companySelectId);

    clearCompanySelect(companySelectId); // clear the select on change

    let i = 0;
    let option = '';
    for (i; i < companies.length; i++) {
      if (companies[i].name == companySelected) {
        option = `<option value="${companies[i]._id}" selected>${companies[i].name}</option>`;
      } else {
        option = `<option value="${companies[i]._id}">${companies[i].name}</option>`;
      };      
      companiesSelect.insertAdjacentHTML('beforeend', option);
    };

    $('#' + companySelectId).formSelect(); // refresh the select - has to be done with JQuery with Materialize
  } catch(err) {
    console.log(err);
  };
};

const clearCompanySelect = (companySelectId) => {
  const companySelect = document.getElementById(companySelectId);
  companySelect.innerHTML = ""; // clear the select on change
  const chooseCompanyOption = '<option value="" disabled selected>Elija una compañía</option>';
  companySelect.insertAdjacentHTML('beforeend', chooseCompanyOption);
};