/* REGION */
// Handle edit region confirmation
EDIT_REGION_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_REGION_VARS.nameError.textContent = '';

  // get the values
  const name = EDIT_REGION_VARS.form.name.value;
  const regionId = EDIT_REGION_VARS.regionId;
  
  try {
    const res = await fetch(`/regions-cities/regions/${regionId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      EDIT_REGION_VARS.nameError.textContent = data.errors.name;
    };
    // if the region exist, means the edit region goes well, redirect from the front end
    if (data.region) {
      alert('Región editada con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al editar la región. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* COUNTRY */
// Handle edit country confirmation
EDIT_COUNTRY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_COUNTRY_VARS.nameError.textContent = '';

  // get the values
  const name = EDIT_COUNTRY_VARS.form.name.value;
  const countryId = EDIT_COUNTRY_VARS.countryId;
  
  try {
    const res = await fetch(`/regions-cities/countries/${countryId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      EDIT_COUNTRY_VARS.nameError.textContent = data.errors.name;
    };
    // if the country exist, means the edit country goes well, redirect from the front end
    if (data.country) {
      alert('País editado con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al editar el país. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* CITY */
// Handle edit city confirmation
EDIT_CITY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_CITY_VARS.nameError.textContent = '';

  // get the values
  const name = EDIT_CITY_VARS.form.name.value;
  const cityId = EDIT_CITY_VARS.cityId;
  
  try {
    const res = await fetch(`/regions-cities/cities/${cityId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      EDIT_CITY_VARS.nameError.textContent = data.errors.name;
    };
    // if the city exist, means the edit city goes well, redirect from the front end
    if (data.city) {
      alert('Ciudad editada con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al editar el país. Por favor intente nuevamente.');
    console.log(err);
  };
});