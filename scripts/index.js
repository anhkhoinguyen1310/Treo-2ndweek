console.log('Hello JS!')


function changeFirstBox() {
  console.log('Change My first Box Treo March 30')
  document.getElementById("change-text").innerHTML = "text changed !!!!";
}

setTimeout(changeFirstBox, 3000);

let count = 0

function changeSecondBox() {
  // count++
  count = count + 1
  document.getElementById("change-count").innerHTML = count;
}

 

setInterval(changeSecondBox, 1000);

let clickCount = 0

function incrementOnClick() {
  clickCount++
  document.getElementById("change-click").innerHTML = clickCount;
}
function changetheDate() {
  document.getElementById("change-to-current-date").innerHTML = changedate;


}
//change color
const changeColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("change-color").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
setInterval(changeColor, 3000);

//Change hover
let hoverCount = 0
document.getElementById("change-hover").addEventListener("mouseover", () => {
  hoverCount++;
  document.getElementById("change-hover").innerHTML = hoverCount;
});

document
  .getElementById("change-click")
  .addEventListener("click", incrementOnClick);

