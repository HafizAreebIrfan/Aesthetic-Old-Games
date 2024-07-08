let header = document.querySelector(".header");
let navul = document.querySelector(".header nav ul");
let navLi = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");
let mobmenu = document.querySelector(".mobilemenu");

let submitform = document.querySelector(".submit");

/*----nav active on scroll----*/
window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - header.offsetHeight) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};
/*---responsive menu---*/
mobmenu.addEventListener("click",()=>{
    navul.classList.toggle("hide");
});
