function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
  
    // Simple validation logic
    if (username === 'Astral Paradox' && password === '1035') {
      errorMessage.innerHTML = '';
      alert('Login successful!');
      window.location.href = "icons.html";
    } else {
      errorMessage.innerHTML = 'Invalid username or password.';
    }
  }