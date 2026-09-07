
const heading = document.getElementById("heading");
const btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    
    heading.textContent = "You clicked the button!";
    heading.style.color = "blue";
    heading.classList.add("highlight");
});