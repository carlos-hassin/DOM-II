// Your code goes here
headerTitle = document.querySelector("h1");
headerTitle.addEventListener("mouseenter", () => {
  headerTitle.style.transform ="scale(1.2)";
  headerTitle.style.transition = "all 0.3s";
})
headerTitle.addEventListener("mouseleave", () => {
  headerTitle.style.transform ="scale(1)";
  headerTitle.style.transition = "all 0.3s"
})

const signBtn = document.querySelector('.btn');
signBtn.addEventListener('mouseover', () => {
  signBtn.textContent = 'Hello!';
  signBtn.style.background = 'purple';
})

const introText = document.querySelector('.intro p')
introText.addEventListener('wheel',()=>{
  introText.style.backgroundColor='slateblue';
     })

const letsGoText = document.querySelector('.text-content h2')
letsGoText.addEventListener("click", () =>{
  letsGoText.style.color = "red";
})

const advText = document.querySelectorAll('.text-content h2');
advText[1].addEventListener("dblclick", () =>{
  advText[1].textContent = "<--- Doesn't that look nice?";
  advText[1].style.backgroundColor = "purple";
})

const navLink = document.querySelectorAll('a');
navLink[3].addEventListener("mouseenter", () => {
  navLink[3].style.transform ="scale(1.2)";
  navLink[3].style.transition = "all 0.3s";
  navLink[3].style.color = "green";
  navLink[3].textContent = "Change Page Color!";
})
navLink[3].addEventListener("mouseleave", () => {
  navLink[3].style.transform ="scale(1)";
  navLink[3].style.transition = "all 0.3s";
  navLink[3].textContent = "Contact";
  navLink[3].style.color = "black";
})

const body = document.querySelector('body');
navLink[3].addEventListener("click", () =>{
  body.style.backgroundColor = "green";
})
navLink[3].addEventListener("dblclick", () =>{
  body.style.backgroundColor = "white";
})

navLink[2].addEventListener("click", (event) => {
  console.log("stopped the link");
  event.preventDefault();
})

header = document.querySelector('header')
header.addEventListener("click", () =>{
  header.style.backgroundColor = "slateblue";
})

navLink[3].addEventListener('click', (event) => {
  event.stopPropagation();
  console.log("Button clicked, bubbling stopped!");
})