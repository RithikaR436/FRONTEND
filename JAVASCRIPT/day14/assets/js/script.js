 const btn.getElementById("btn")
 const box.getElementById("box")

 let not=true

 btn.addEventlistener("btn"()=>{
      not =!not

    if(not){
        btn.textcontent ="No Click";
        box.style.display = "none";
    }else{
        btn.textcontent = "Click Me";
        box.style.display = "block";

 }
})
