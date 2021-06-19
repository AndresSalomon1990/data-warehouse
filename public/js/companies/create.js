// Fill selects
fillRegionSelect(CREATE_COMPANY_VARS.regionSelect);

document.getElementById(CREATE_COMPANY_VARS.regionSelect).addEventListener('change', () => {
  const regionId = document.getElementById(CREATE_COMPANY_VARS.regionSelect).value;

  fillCountrySelect(CREATE_COMPANY_VARS.countrySelect, CREATE_COMPANY_VARS.citySelect, regionId);
});

document.getElementById(CREATE_COMPANY_VARS.countrySelect).addEventListener('change', () => {
  const regionId = document.getElementById(CREATE_COMPANY_VARS.regionSelect).value;
  const countryId = document.getElementById(CREATE_COMPANY_VARS.countrySelect).value;

  fillCitySelect(CREATE_COMPANY_VARS.citySelect, regionId, countryId);
});

// Handle create confirmation
CREATE_COMPANY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_COMPANY_VARS.nameError.textContent = '';
  CREATE_COMPANY_VARS.addressError.textContent = '';
  CREATE_COMPANY_VARS.emailError.textContent = '';
  CREATE_COMPANY_VARS.phoneError.textContent = '';
  CREATE_COMPANY_VARS.regionError.textContent = '';
  CREATE_COMPANY_VARS.countryError.textContent = '';
  CREATE_COMPANY_VARS.cityError.textContent = '';

  // get the values
  const name = CREATE_COMPANY_VARS.form.name.value;
  const address = CREATE_COMPANY_VARS.form.address.value;
  const email = CREATE_COMPANY_VARS.form.email.value; // references the email 'name' attribute
  const phone = CREATE_COMPANY_VARS.form.phone.value;
  const region = CREATE_COMPANY_VARS.form.region.value;
  const country = CREATE_COMPANY_VARS.form.country.value;
  const city = CREATE_COMPANY_VARS.form.city.value;

  try {
    const res = await fetch('/companies', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        address: address,
        email: email,
        phone: phone,
        region: region,
        country: country,
        city: city
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      CREATE_COMPANY_VARS.nameError.textContent = data.errors.name;
      CREATE_COMPANY_VARS.addressError.textContent = data.errors.address;
      CREATE_COMPANY_VARS.emailError.textContent = data.errors.email;
      CREATE_COMPANY_VARS.phoneError.textContent = data.errors.phone;
      CREATE_COMPANY_VARS.regionError.textContent = data.errors.region;
      CREATE_COMPANY_VARS.countryError.textContent = data.errors.country;
      CREATE_COMPANY_VARS.regionError.textContent = data.errors.city;
    };
    // if the company exist, means the create company goes well, redirect from the front end
    if (data.company) {
      alert('Compañía creada con éxito.');
      location.assign('/companies'); // redirect to comapanies page
    };
  } catch (err) {
    alert('Error al crear la compañía. Por favor intente nuevamente.');
    console.log(err);
  };
});