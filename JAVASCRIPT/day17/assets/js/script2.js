function loadUser() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const table = document.getElementById('userTable');
  table.innerHTML = `
    <tr><td>Name</td><td>${user.name}</td></tr>
    <tr><td>Email</td><td>${user.email}</td></tr>
  `;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "login.html";
}

loadUser();