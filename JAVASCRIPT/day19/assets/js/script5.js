document.addEventListener("DOMContentLoaded", () => {
  const getData = async () => {
    const getfromApi = await fetch("https://dummyjson.com/posts");
    const dataChange = await getfromApi.json();

    console.log(dataChange);

    dataChange.posts.forEach((e) => {
      console.log(e.title, "-", e.body);
    });
  };

  getData();
});