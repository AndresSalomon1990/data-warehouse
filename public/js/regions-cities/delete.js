/* REGION */
// handle delete region confirmation
DELETE_REGION_VARS.deleteRegionButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_REGION_VARS.regionId;

  try {
    const res = await fetch(`/regions-cities/regions/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object

    // Check if the region has countries
    if (data.errorCountries) {
      alert(data.errorCountries);
    };

    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      alert('Error al eliminar la región. Por favor intente nuevamente.');
    };
    
    // if the region exist, means deleting the region goes well, redirect from the front end
    if (data.deletedCount == 1) {
      alert('Región eliminada correctamente.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al eliminar la región. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* COUNTRY */
// handle delete country confirmation
DELETE_COUNTRY_VARS.deleteCountryButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_COUNTRY_VARS.countryId;

  try {
    const res = await fetch(`/regions-cities/countries/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object

    // Check if the country has cities
    if (data.errorCities) {
      alert(data.errorCities);
    };

    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      alert('Error al eliminar el país. Por favor intente nuevamente.');
    };
    
    // if the country exist, means deleting the country goes well, redirect from the front end
    if (data.deletedCount == 1) {
      alert('País eliminado correctamente.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al eliminar el país. Por favor intente nuevamente.');
    console.log(err);
  };
});

/* CITY */
// handle delete city confirmation
DELETE_CITY_VARS.deleteCityButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_CITY_VARS.cityId;

  try {
    const res = await fetch(`/regions-cities/cities/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      alert('Error al eliminar la ciudad. Por favor intente nuevamente.');
    };
    // if the city exist, means deleting the city goes well, redirect from the front end
    if (data.deletedCount == 1) {
      alert('Ciudad eliminada correctamente.');
      location.assign('/regions-cities'); // redirect to regions-cities page
    };
  } catch (err) {
    alert('Error al eliminar la ciudad. Por favor intente nuevamente.');
    console.log(err);
  };
});