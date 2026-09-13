
function loginUser() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const msg = document.getElementById('msg');

  if (!email || !password) {
    msg.textContent = "Please fill all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    msg.textContent = "Invalid email or password";
    return;
  }

  localStorage.setItem('loggedInUser', JSON.stringify(user));

  msg.textContent = "Login successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}