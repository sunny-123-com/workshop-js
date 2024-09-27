 
function startQuiz() {
   let btn=document.getElementById("quiz");
   btn.setAttribute("disabled","true")
   let div = document.createElement("div");
   div.classsName="div";
   document.body.appendChild(div);
    let pdata = ["Question-1","Answer-1","Answer-2","Answer-3"]; 
    for(let data of pdata){
       let text = document.createElement("p")
  text.innerText=data;
  text.className="text";
  div.appendChild(text)

   }
div.appendChild(pdata);

 let p2=docuemnt.createElement("p");
 p2.innertext="Answer-4";
 div.appendChild(p2);
}
