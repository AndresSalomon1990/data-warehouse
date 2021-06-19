// handle delete confirmation
DELETE_CONTACT_VARS.deleteContactButton.addEventListener('click', async (event) => {
  event.preventDefault(); // prevent any default action

  // get the values
  const id = DELETE_CONTACT_VARS.id;

  try {
    const res = await fetch(`/contacts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch
    if (data.errors) {
      alert('Error al eliminar el contacto. Por favor intente nuevamente.');
    };
    // if the contact exist, means deleting the contact goes well, redirect from the front end
    if (data.contact) {
      alert('Contacto eliminado correctamente.');
      location.assign('/contacts'); // redirect to contacts page
    };
  } catch (err) {
    alert('Error al eliminar el contacto. Por favor intente nuevamente.');
    console.log(err);
  };
});

// handle delete many contacts
const deleteManyContacts = async (contactIds) => {
  try {
    const res = await fetch('/contacts/delete-many', {
      method: 'DELETE',
      body: JSON.stringify({
        ids: contactIds
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // check that all the contact ids has been deleted, then redirect from the frontend
    if (data.contacts.deletedCount >= contactIds.length) {
      alert('Contactos eliminados correctamente.');
      location.assign('/contacts'); // redirect to contacts page
    };
  } catch (err) {
    alert('Error al eliminar los contactos. Por favor intente nuevamente.');
    console.log(err);
  }
};