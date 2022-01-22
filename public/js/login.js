const loginFormHandler = async(event) => {
  event.preventDefault();

  const username = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok){
      document.location.replace("/dashboard")
  } else {
    alert("Could not login!")
  }
}


const signupFormHandler = async(event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: name,
      password: password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok){
    document.location.replace("/dashboard")
} else {
  alert("Could not sign up!")
}
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);