function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}


console.log("Loading started (.then version)...");
loadData().then((result) => {
    console.log(result); 
});


async function fetchData() {
    console.log("Loading started (async/await version)...");
    const result = await loadData(); 
    console.log(result); 
} 
fetchData(); 