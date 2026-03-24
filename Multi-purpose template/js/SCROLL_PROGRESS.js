/* SCROLL PROGRESS */

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;
const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled = (scrollTop / height) * 100;

progressBar.style.width = scrolled + "%";

});


/* BACK TO TOP */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){
backToTop.classList.remove("opacity-0","invisible");
}else{
backToTop.classList.add("opacity-0","invisible");
}

});

backToTop.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});