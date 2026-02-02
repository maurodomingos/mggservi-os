function goTo(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function toggleChat(){
  const box=document.getElementById("chatBox");
  box.style.display = box.style.display==="block"?"none":"block";
}

const input=document.getElementById("chatInput");
const body=document.getElementById("chatBody");

input.addEventListener("keypress",e=>{
  if(e.key==="Enter" && input.value){
    body.innerHTML+=`<p><b>Você:</b> ${input.value}</p>`;
    body.innerHTML+=`<p><b>MGG:</b> Obrigado! Vamos responder em breve.</p>`;
    input.value="";
    body.scrollTop=body.scrollHeight;
  }
});
