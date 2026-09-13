function outerFunction(callback) {
  console.log("Outer function executed");
  callback();
}

outerFunction(() => {
  console.log("Callback function executed");
});