const btn = document.getElementById("btn");
const light = document.getElementById("light");

function toggleBtn() {
  // add event for click button
  btn.classList.toggle("active");
  // change the background
  light.classList.toggle("on");
}