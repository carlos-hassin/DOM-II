// Your code goes here
let navBar = document.querySelectorAll(".nav a");
navBar.forEachaddEventListener("click", () =>{
  navBar.style.backgroundColor = "blue";
})