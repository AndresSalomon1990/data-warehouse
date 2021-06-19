/* REGION */
// Handle create region confirmation
CREATE_REGION_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_REGION_VARS.nameError.textContent = '';

  // get the values
  const name = CREATE_REGION_VARS.form.name.value;

  try {
    const res = await fetch('/regions-cities/regions', {
      method: 'POST',
      body: JSON.stringify({
        name: name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      CREATE_REGION_VARS.nameError.textContent = data.errors.name;
    };
    // if the region exist, means the create region goes well, redirect from the front end
    if (data.region) {
      alert('Región creada con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al crear la región. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* COUNTRY */
// Handle create country confirmation
CREATE_COUNTRY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_COUNTRY_VARS.nameError.textContent = '';

  // get the values
  const name = CREATE_COUNTRY_VARS.form.name.value;
  const regionId = CREATE_COUNTRY_VARS.regionId;
  
  try {
    const res = await fetch(`/regions-cities/regions/${regionId}/countries`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        region_id: regionId
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      CREATE_COUNTRY_VARS.nameError.textContent = data.errors.name;
    };
    // if the country exist, means the create country goes well, redirect from the front end
    if (data.country) {
      alert('País creado con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al crear el país. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* CITY */
// Handle create city confirmation
CREATE_CITY_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_CITY_VARS.nameError.textContent = '';

  // get the values
  const name = CREATE_CITY_VARS.form.name.value;
  const countryId = CREATE_CITY_VARS.countryId;
  
  try {
    const res = await fetch(`/regions-cities/countries/${countryId}/cities`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        country_id: countryId
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      CREATE_CITY_VARS.nameError.textContent = data.errors.name;
    };
    // if the city exist, means the create city goes well, redirect from the front end
    if (data.city) {
      alert('Ciudad creada con éxito.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al crear la ciudad. Por favor intente nuevamente.');
    console.log(err);
  };
});