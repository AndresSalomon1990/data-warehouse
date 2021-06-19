// Handle create confirmation
CREATE_USER_VARS.form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  CREATE_USER_VARS.nameError.textContent = '';
  CREATE_USER_VARS.lnameError.textContent = '';
  CREATE_USER_VARS.emailError.textContent = '';
  CREATE_USER_VARS.passwordError.textContent = '';
  CREATE_USER_VARS.profileError.textContent = '';

  // get the values
  const name = CREATE_USER_VARS.form.name.value;
  const lname = CREATE_USER_VARS.form.lname.value;
  const email = CREATE_USER_VARS.form.email.value; // references the email 'name' attribute
  const password = CREATE_USER_VARS.form.password.value;
  const profile = CREATE_USER_VARS.form.profile.value;

  try {
    const res = await fetch('/users', {
      method: 'POST',
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
    // if the errors object exist in the data returned by the fetch when performing the create user
    if (data.errors) {
      CREATE_USER_VARS.nameError.textContent = data.errors.name;
      CREATE_USER_VARS.lnameError.textContent = data.errors.lname;
      CREATE_USER_VARS.emailError.textContent = data.errors.email;
      CREATE_USER_VARS.passwordError.textContent = data.errors.password;
      CREATE_USER_VARS.profileError.textContent = data.errors.profile;
    };
    // if the user exist, means the create user goes well, redirect from the front end
    if (data.user) {
      alert('Usuario creado con éxito.');
      location.assign('/users'); // redirect to users page
    };
  } catch (err) {
    alert('Error al crear el usuario. Por favor intente nuevamente.');
    console.log(err);
  };
});