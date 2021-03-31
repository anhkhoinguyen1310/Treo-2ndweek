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
document
  .getElementById("change-click")
  .addEventListener("click", incrementOnClick);


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
// Toggle he loves me
let loveMe = 0;

document.getElementById("change-he-loves-me").addEventListener("click", () => {
  loveMe++;
  if (loveMe%2)
  document.getElementById("change-he-loves-me").innerHTML = "He loves Me";
  else
  document.getElementById("change-he-loves-me").innerHTML = "He Loves Me not";
})


//changed date

function displayDate() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

document.getElementById("change-to-current-date").addEventListener("click",() => {
document.getElementById("change-to-current-date").innerHTML = displayDate();
});

//Resize


