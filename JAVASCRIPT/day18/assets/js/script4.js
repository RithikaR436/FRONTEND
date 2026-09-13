function myPromise() {
  return new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    console.log("Fetching data...");
    const result = await myPromise();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();