let add=document.querySelector(".add");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let delbtn=document.querySelector(".dele");
add.addEventListener("click",()=>{
     if(inp.value)
     {
     let li=document.createElement("li");
     li.innerHTML=inp.value;
     ul.append(li);
     inp.value="";
     let del=document.createElement("button");
     del.innerHTML="DELETE";
     del.classList.add("dele");
     li.append(del);
     }
})
ul.addEventListener("click",()=>{
   if(event.target.nodeName="BUTTON"){
    let para=event.target.parentElement;
    para.remove();
   }
})