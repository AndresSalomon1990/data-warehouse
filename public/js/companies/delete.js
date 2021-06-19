// handle delete confirmation
DELETE_COMPANY_VARS.deleteCompanyButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_COMPANY_VARS.id;

  try {
    const res = await fetch(`/companies/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      alert('Error al eliminar la compañía. Por favor intente nuevamente.');
    };
    // if the company exist, means deleting the company goes well, redirect from the front end
    if (data.company) {
      alert('Compañía eliminada correctamente.');
      location.assign('/companies'); // redirect to companies page
    };
  } catch (err) {
    alert('Error al eliminar la compañía. Por favor intente nuevamente.');
    console.log(err);
  };
});