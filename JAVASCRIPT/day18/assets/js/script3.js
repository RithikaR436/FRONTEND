const myPromise = new Promise((resolve, reject) => {
  let success = true; 
  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.log("Catch:", error);
  })
  .finally(() => {
    console.log("Finally: This always runs");
  });