let button = document.getElementById("submit");

button.addEventListener("click", () => {
  let age = document.getElementById("age"); 
  let show = document.getElementById("show");

  let ageGrab = age.value;

  let parsedAge = parseInt(ageGrab);

  if (parsedAge >= 18) {
    show.innerText = "You are an adult";
  }
  else if(parsedAge<18){
    show.innerText = "You are a child";
  }
  else{
    show.innerText = "please enter a valid number"
  }
});