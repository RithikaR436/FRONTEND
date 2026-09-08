// const btn = document.getElementById("togglebtn")
//  const para = document.getElementById("para")

 
//  btn.addEventlistener("click",() => {
//       para.classList.toggle("show");

//     if (para.classList.contains("show")){
//         btn.textcontent ="show";
//         box.style.display = "none";
//     }else{
//         btn.textcontent = "hide";
//         box.style.display = "block";

//  }
// });



//  const btn = document.getElementById("btn")
//  const para = document.getElementById("para")

//  let not = true;

//  btn.addEventlistener("click",() => {
//       not = !not;

//     if (not){
//         btn.textcontent ="show";
//         box.style.display = "none";
//     }else{
//         btn.textcontent = "hide";
//         box.style.display = "block";

//  }
// });





const button = document.getElementById("btn");
const para = document.getElementById("para");

let isVisible = true;

button.addEventListener("click", () => {

    isVisible = !isVisible;

    if (isVisible) {
        para.style.display = "block";
        btn.textContent = "Hide";
    } else {
        para.style.display = "none";
        btn.textContent = "Show";
    }

});




// const button = document.getElementById("btn");
// const para = document.getElementById("para");

// btn.addEventListener("click"), () =>{
//     para.classList.toggle("this is content");
// }