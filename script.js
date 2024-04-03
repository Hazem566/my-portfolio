// icon => nic
// link => active__item
/* ----------- target elements ----------- */
const dot = document.querySelector(".dot");

const linksContainer = document.querySelector(".menu");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".nav__item");
const menuBtn = document.querySelector(".icon");

const sections = document.querySelectorAll("section");


/* -------------- event listeners -------------- */
window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        blink(dot);
    }, 1000);
});
window.addEventListener("resize", () => {
    setHeight();
    if(window.innerWidth > 992) {
        linksContainer.style.height = "min-content";
        menuBtn.classList.remove("nic");
    } else {
        linksContainer.style.height = "0";
        menuBtn.classList.remove("nic");
    }
});
menuBtn.addEventListener("click", toggleNav);
navLinks.forEach(link=>link.addEventListener("click", navigateBetweenSections));
/* -------------- functions -------------- */

function blink(ele) {
    if(ele.classList.contains("blink")) ele.classList.remove("blink");
    else ele.classList.add("blink");
}
function toggleNav() {
    if(window.innerWidth <= 992) {
        let containerHeight = linksContainer.offsetHeight;
        let linksHeight = links.offsetHeight;
        if(containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
            menuBtn.classList.add("nic");
        } else {
            linksContainer.style.height = "0";
            menuBtn.classList.remove("nic");
        }
    }
}
function navigateBetweenSections(e) {
    let currentLink = e.currentTarget;
    if(window.innerWidth <= 992) {
        menuBtn.classList.remove("nic");
        linksContainer.style.height = "0";
        navLinks.forEach(link=>link.classList.remove("active__item"));
        currentLink.classList.add("active__item");
    } else {
        navLinks.forEach(link=>link.classList.remove("active__item"));
        currentLink.classList.add("active__item");

    }

}
function setHeight() {
    let headerHeight = document.getElementById("header").offsetHeight;
    sections.forEach(sec => {
        sec.style.height = `calc(100dvh - ${headerHeight}px)`;
    });
}
setHeight();