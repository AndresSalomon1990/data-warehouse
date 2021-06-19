// handle delete confirmation
DELETE_USER_VARS.deleteUserButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_USER_VARS.id;

  try {
    const res = await fetch(`/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch when performing the create user
    if (data.errors) {
      alert('Error al eliminar el usuario. Por favor intente nuevamente.');
    };
    // if the user exist, means deleting the user goes well, redirect from the front end
    if (data.user) {
      alert('Usuario eliminado correctamente.');
      location.assign('/users'); // redirect to users page
    };
  } catch (err) {
    alert('Error al eliminar el usuario. Por favor intente nuevamente.');
    console.log(err);
  };
});