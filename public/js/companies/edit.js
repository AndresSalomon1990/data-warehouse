// handle edit confirmation
EDIT_COMPANY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_COMPANY_VARS.nameError.textContent = '';
  EDIT_COMPANY_VARS.addressError.textContent = '';
  EDIT_COMPANY_VARS.emailError.textContent = '';
  EDIT_COMPANY_VARS.phoneError.textContent = '';
  EDIT_COMPANY_VARS.regionError.textContent = '';
  EDIT_COMPANY_VARS.countryError.textContent = '';
  EDIT_COMPANY_VARS.cityError.textContent = '';

  // get the values
  const id = EDIT_COMPANY_VARS.id;
  const name = EDIT_COMPANY_VARS.form.name.value;
  const address = EDIT_COMPANY_VARS.form.address.value;
  const email = EDIT_COMPANY_VARS.form.email.value; // references the email 'name' attribute
  const phone = EDIT_COMPANY_VARS.form.phone.value;
  const region = EDIT_COMPANY_VARS.form.region.value;
  const country = EDIT_COMPANY_VARS.form.country.value;
  const city = EDIT_COMPANY_VARS.form.city.value;

  try {
    const res = await fetch(`/companies/${id}`, {
      method: 'PUT',
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
      EDIT_USER_VARS.nameError.textContent = data.errors.name;
      EDIT_USER_VARS.addressError.textContent = data.errors.address;
      EDIT_USER_VARS.emailError.textContent = data.errors.email;
      EDIT_USER_VARS.phoneError.textContent = data.errors.phone;
      EDIT_USER_VARS.regionError.textContent = data.errors.region;
      EDIT_USER_VARS.countryError.textContent = data.errors.country;
      EDIT_USER_VARS.cityError.textContent = data.errors.city;
    };
    // if the company exist, means creating the company goes well, redirect from the front end
    if (data.company) {
      alert('Compañía modificada correctamente.');
      location.assign('/companies'); // redirect to companies page
    };
  } catch (err) {
    alert('Error al editar la compañía. Por favor intente nuevamente.');
    console.log(err);
  };
});