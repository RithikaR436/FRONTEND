const show = document.querySelector("#showingdata");
show.innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {
  const getData = async () => {
    const getfromApi = await fetch("https://dummyjson.com/users");
    const dataChange = await getfromApi.json();

    console.log(dataChange);

    dataChange.users.forEach((e) => {
      show.innerHTML += `
        <tr>
          <td>${e.firstName} ${e.lastName}</td>
          <td>${e.email}</td>
          <td>${e.age}</td>
        </tr>
      `;
    });
  };

  getData();
});