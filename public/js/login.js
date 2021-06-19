const form = document.getElementById('login-form');
const emailError = document.getElementById('login-email-error');
const passwordError = document.getElementById('login-password-error');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the page refreshing

  // reset errors
  emailError.textContent = '';
  passwordError.textContent = '';

  // get the values
  const email = form.email.value; // references the email 'name' attribute
  const password = form.password.value;

  try {
    const res = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json(); // parse response to js object
    // if the errors object exist in the data returned by the fetch when performing the log in
    if (data.errors) {
      emailError.textContent = data.errors.email;
      passwordError.textContent = data.errors.password;
    };
    // if the user exist, means the log in goes well, redirect from the front end
    if (data.user) {
      location.assign('/contacts'); // redirect to contacts
    };
  } catch (err) {
    console.log(err);
  };
});