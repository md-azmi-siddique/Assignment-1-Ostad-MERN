let inputAge = document.getElementById("inputAge");
var showAge = document.getElementById('showAge');
var showImg = document.getElementById('showImg');
var showTitle = document.getElementById('showTitle');


inputAge.addEventListener("input", () => {
  var age = parseFloat(inputAge.value);

  if (age >= 18) {
    showAge.style.display = 'block';
    showImg.src = './assets/adult.jpg';
    showTitle.innerText = "You are an adult";

    // showAge.innerText = "You are an adult";
    console.log("adult");
  } else{
    showAge.style.display = 'block';
    showImg.src = './assets/child.jpeg';
    showTitle.innerText = "You are an child";
  }
});
