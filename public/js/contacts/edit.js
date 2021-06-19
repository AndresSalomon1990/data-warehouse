// Handle create confirmation
EDIT_CONTACT_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_CONTACT_VARS.nameError.textContent = '';
  EDIT_CONTACT_VARS.lnameError.textContent = '';
  EDIT_CONTACT_VARS.emailError.textContent = '';
  EDIT_CONTACT_VARS.companyError.textContent = '';
  EDIT_CONTACT_VARS.positionError.textContent = '';
  EDIT_CONTACT_VARS.regionError.textContent = '';
  EDIT_CONTACT_VARS.countryError.textContent = '';
  EDIT_CONTACT_VARS.cityError.textContent = '';
  EDIT_CONTACT_VARS.addressError.textContent = '';  

  // get the values
  const id = EDIT_CONTACT_VARS.id;
  const name = EDIT_CONTACT_VARS.form.name.value;
  const lname = EDIT_CONTACT_VARS.form.lname.value;
  const email = EDIT_CONTACT_VARS.form.email.value; // references the email 'name' attribute
  const company = EDIT_CONTACT_VARS.form.company.value;
  const position = EDIT_CONTACT_VARS.form.position.value;
  const region = EDIT_CONTACT_VARS.form.region.value;
  const country = EDIT_CONTACT_VARS.form.country.value;
  const city = EDIT_CONTACT_VARS.form.city.value;
  const address = EDIT_CONTACT_VARS.form.address.value;
  const interest = EDIT_CONTACT_VARS.form.interest.value;
  const contactChannelWhatsapp = EDIT_CONTACT_VARS.form.contactChannelWhatsapp.value;
  const userAccountWhatsapp = EDIT_CONTACT_VARS.form.userAccountWhatsapp.value;
  const preferenceWhatsapp = EDIT_CONTACT_VARS.form.preferenceWhatsapp.value;
  const contactChannelFacebook = EDIT_CONTACT_VARS.form.contactChannelFacebook.value;
  const userAccountFacebook = EDIT_CONTACT_VARS.form.userAccountFacebook.value;
  const preferenceFacebook = EDIT_CONTACT_VARS.form.preferenceFacebook.value;
  const contactChannelInstagram = EDIT_CONTACT_VARS.form.contactChannelInstagram.value;
  const userAccountInstagram = EDIT_CONTACT_VARS.form.userAccountInstagram.value;
  const preferenceInstagram = EDIT_CONTACT_VARS.form.preferenceInstagram.value;
  const contactChannelTwitter = EDIT_CONTACT_VARS.form.contactChannelTwitter.value;
  const userAccountTwitter = EDIT_CONTACT_VARS.form.userAccountTwitter.value;
  const preferenceTwitter = EDIT_CONTACT_VARS.form.preferenceTwitter.value;

  try {
    const res = await fetch(`/contacts/${id}`, {
      method: 'PUT',
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
      EDIT_CONTACT_VARS.nameError.textContent = data.errors.name;
      EDIT_CONTACT_VARS.lnameError.textContent = data.errors.lname;
      EDIT_CONTACT_VARS.emailError.textContent = data.errors.email;
      EDIT_CONTACT_VARS.companyError.textContent = data.errors.company;
      EDIT_CONTACT_VARS.positionError.textContent = data.errors.position;
      EDIT_CONTACT_VARS.regionError.textContent = data.errors.region;
      EDIT_CONTACT_VARS.countryError.textContent = data.errors.country;
      EDIT_CONTACT_VARS.regionError.textContent = data.errors.city;
      EDIT_CONTACT_VARS.addressError.textContent = data.errors.address;
    };
    // if the contact exist, means the edit contact goes well, redirect from the front end
    if (data.contact) {
      alert('Contacto editado con éxito.');
      location.assign('/contacts'); // redirect to contacts page
    };
  } catch (err) {
    alert('Error al editar el contacto. Por favor intente nuevamente.');
    console.log(err);
  };
});