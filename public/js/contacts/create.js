// Fill selects
fillCompanySelect(CREATE_CONTACT_VARS.companySelect);

fillRegionSelect(CREATE_CONTACT_VARS.regionSelect);

document.getElementById(CREATE_CONTACT_VARS.regionSelect).addEventListener('change', () => {
  const regionId = document.getElementById(CREATE_CONTACT_VARS.regionSelect).value;

  fillCountrySelect(CREATE_CONTACT_VARS.countrySelect, CREATE_CONTACT_VARS.citySelect, regionId);
});

document.getElementById(CREATE_CONTACT_VARS.countrySelect).addEventListener('change', () => {
  const regionId = document.getElementById(CREATE_CONTACT_VARS.regionSelect).value;
  const countryId = document.getElementById(CREATE_CONTACT_VARS.countrySelect).value;

  fillCitySelect(CREATE_CONTACT_VARS.citySelect, regionId, countryId);
});

// Handle create confirmation
CREATE_CONTACT_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_CONTACT_VARS.nameError.textContent = '';
  CREATE_CONTACT_VARS.lnameError.textContent = '';
  CREATE_CONTACT_VARS.emailError.textContent = '';
  CREATE_CONTACT_VARS.companyError.textContent = '';
  CREATE_CONTACT_VARS.positionError.textContent = '';
  CREATE_CONTACT_VARS.regionError.textContent = '';
  CREATE_CONTACT_VARS.countryError.textContent = '';
  CREATE_CONTACT_VARS.cityError.textContent = '';
  CREATE_CONTACT_VARS.addressError.textContent = '';  

  // get the values
  const name = CREATE_CONTACT_VARS.form.name.value;
  const lname = CREATE_CONTACT_VARS.form.lname.value;
  const email = CREATE_CONTACT_VARS.form.email.value; // references the email 'name' attribute
  const company = CREATE_CONTACT_VARS.form.company.value;
  const position = CREATE_CONTACT_VARS.form.position.value;
  const region = CREATE_CONTACT_VARS.form.region.value;
  const country = CREATE_CONTACT_VARS.form.country.value;
  const city = CREATE_CONTACT_VARS.form.city.value;
  const address = CREATE_CONTACT_VARS.form.address.value;
  const interest = CREATE_CONTACT_VARS.form.interest.value;
  const contactChannelWhatsapp = CREATE_CONTACT_VARS.form.contactChannelWhatsapp.value;
  const userAccountWhatsapp = CREATE_CONTACT_VARS.form.userAccountWhatsapp.value;
  const preferenceWhatsapp = CREATE_CONTACT_VARS.form.preferenceWhatsapp.value;
  const contactChannelFacebook = CREATE_CONTACT_VARS.form.contactChannelFacebook.value;
  const userAccountFacebook = CREATE_CONTACT_VARS.form.userAccountFacebook.value;
  const preferenceFacebook = CREATE_CONTACT_VARS.form.preferenceFacebook.value;
  const contactChannelInstagram = CREATE_CONTACT_VARS.form.contactChannelInstagram.value;
  const userAccountInstagram = CREATE_CONTACT_VARS.form.userAccountInstagram.value;
  const preferenceInstagram = CREATE_CONTACT_VARS.form.preferenceInstagram.value;
  const contactChannelTwitter = CREATE_CONTACT_VARS.form.contactChannelTwitter.value;
  const userAccountTwitter = CREATE_CONTACT_VARS.form.userAccountTwitter.value;
  const preferenceTwitter = CREATE_CONTACT_VARS.form.preferenceTwitter.value;

  try {
    const res = await fetch('/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        lname: lname,
        email: email,
        company: company,
        position: position,
        region: region,
        country: country,
        city: city,
        address: address,
        interest: interest,
        contactChannelWhatsapp: contactChannelWhatsapp,
        userAccountWhatsapp: userAccountWhatsapp,
        preferenceWhatsapp: preferenceWhatsapp,
        contactChannelFacebook: contactChannelFacebook,
        userAccountFacebook: userAccountFacebook,
        preferenceFacebook: preferenceFacebook,
        contactChannelInstagram: contactChannelInstagram,
        userAccountInstagram: userAccountInstagram,
        preferenceInstagram: preferenceInstagram,
        contactChannelTwitter: contactChannelTwitter,
        userAccountTwitter: userAccountTwitter,
        preferenceTwitter: preferenceTwitter
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      CREATE_CONTACT_VARS.nameError.textContent = data.errors.name;
      CREATE_CONTACT_VARS.lnameError.textContent = data.errors.lname;
      CREATE_CONTACT_VARS.emailError.textContent = data.errors.email;
      CREATE_CONTACT_VARS.companyError.textContent = data.errors.company;
      CREATE_CONTACT_VARS.positionError.textContent = data.errors.position;
      CREATE_CONTACT_VARS.regionError.textContent = data.errors.region;
      CREATE_CONTACT_VARS.countryError.textContent = data.errors.country;
      CREATE_CONTACT_VARS.regionError.textContent = data.errors.city;
      CREATE_CONTACT_VARS.addressError.textContent = data.errors.address;
    };
    // if the contact exist, means the create contact goes well, redirect from the front end
    if (data.contact) {
      alert('Contacto creado con éxito.');
      location.assign('/contacts'); // redirect to contacts page
    };
  } catch (err) {
    alert('Error al crear el contacto. Por favor intente nuevamente.');
    console.log(err);
  };
});