var container = document.getElementById('container');
var wrong=0;
var punish=0;
window.onload=function(){
  const randomChars = addNewChar(2);
  container.textContent += randomChars;
}
    

window.addEventListener("keyup", function(e) {
  console.log(container.textContent);
  if(e.key===" "){
    const randomChars =       addNewChar(Math.floor(Math.random() * (3-1+1))+1);
    container.textContent += randomChars;
  }
  if (e.key === 'Escape') {
    wrong=0;
    container.textContent = "";
  }
  if(e.key===container.textContent.charAt(0)){
    wrong=0;
    container.textContent = container.textContent.slice(1);
    const randomChars = addNewChar(Math.floor(Math.random() * (3-1+1))+1);
    container.textContent += randomChars;
  }
   if(e.key!==container.textContent.charAt(0)){
    wrong++;
    if(wrong>3){
      punish=6*(wrong/3);
      const randomChars = addNewChar(punish);
      container.textContent += randomChars;
    }
    
  }
});

function addNewChar(length){
   const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}