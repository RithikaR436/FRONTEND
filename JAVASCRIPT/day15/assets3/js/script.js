
const card = document.getElementById("card");
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    card.classList.toggle("dark-theme");
});


const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
    console.log(nameInput.value);
});