 
const title = document.getElementById("dom");


title.textContent = "DOM Selectors & Content Change - Updated!";


const paras = document.querySelectorAll(".select");


paras.forEach(function (p, index) {
    p.textContent = "Updated paragraph " + (index + 1);
});