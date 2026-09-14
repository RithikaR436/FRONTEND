const show = document.querySelector("#showingdata");
show.innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {
  const getData = async () => {
    const getfromApi = await fetch("https://dummyjson.com/products");
    const dataChange = await getfromApi.json();

    console.log(dataChange);

    dataChange.products.forEach((e) => {
      show.innerHTML += `
        <p>${e.title}</p>
        <p>${e.category}</p>
      `;
    });
  };

  getData();
});