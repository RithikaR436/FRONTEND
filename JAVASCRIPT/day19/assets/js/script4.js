const show = document.querySelector("#showingdata");
show.innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {
  const getData = async () => {
    const getfromApi = await fetch("https://dummyjson.com/recipes");
    const dataChange = await getfromApi.json();

    console.log(dataChange);

    dataChange.recipes.forEach((e) => {
      show.innerHTML += `
        <tr>
          <td>${e.name}</td>
          <td>${e.cuisine}</td>
          <td>${e.difficulty}</td>
        </tr>
      `;
    });
  };

  getData();
});