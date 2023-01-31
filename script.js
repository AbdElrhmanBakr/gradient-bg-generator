var cssContent = document.getElementsByTagName("h3")[0];
var body = document.getElementById("gradient");

// . dot is very Important in class
// var color1 = document.getElementsByClassName("color1")[0];
// var color2 = document.getElementsByClassName("color2")[0];

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

//Initial Color
cssContent.textContent =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  //Displaying Colors in h3 in HTML Page
  cssContent.textContent = body.style.background + ";";
  // cssContent.innerHTML=body.style.background+";"
}

function setRandomGradient() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
genNew.addEventListener("click", setRandomGradient);
