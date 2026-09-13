function registerUser() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const msg = document.getElementById('msg');

  if (!name || !email || !password) {
    msg.textContent = "Please fill all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  const exists = users.find(u => u.email === email);
  if (exists) {
    msg.textContent = "Email already registered";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  msg.textContent = "Registered successfully! Redirecting...";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}