// handle edit confirmation
EDIT_USER_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  EDIT_USER_VARS.nameError.textContent = '';
  EDIT_USER_VARS.lnameError.textContent = '';
  EDIT_USER_VARS.emailError.textContent = '';
  EDIT_USER_VARS.passwordError.textContent = '';
  EDIT_USER_VARS.profileError.textContent = '';

  // get the values
  const id = EDIT_USER_VARS.id;
  const name = EDIT_USER_VARS.form.name.value;
  const lname = EDIT_USER_VARS.form.lname.value;
  const email = EDIT_USER_VARS.form.email.value; // references the email 'name' attribute
  const password = EDIT_USER_VARS.form.password.value;
  const profile = EDIT_USER_VARS.form.profile.value;

  try {
    const res = await fetch(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        lname: lname,
        email: email,
        password: password,
        profile: profile
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch when performing the creation of the user
    if (data.errors) {
      EDIT_USER_VARS.nameError.textContent = data.errors.name;
      EDIT_USER_VARS.lnameError.textContent = data.errors.lname;
      EDIT_USER_VARS.emailError.textContent = data.errors.email;
      EDIT_USER_VARS.passwordError.textContent = data.errors.password;
      EDIT_USER_VARS.profileError.textContent = data.errors.profile;
    };
    // if the user exist, means creating the user goes well, redirect from the front end
    if (data.user) {
      alert('Usuario modificado correctamente.');
      location.assign('/users'); // redirect to users page
    };
  } catch (err) {
    alert('Error al editar el usuario. Por favor intente nuevamente.');
    console.log(err);
  };
});