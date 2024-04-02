// icon => nic
/* ----------- target elements ----------- */
const dot = document.querySelector(".dot");

const navBtn = document.querySelector(".icon");
const links = document.querySelector(".links ul");
const navContainer = document.querySelector(".links");
const navLinks = document.querySelectorAll(".nav__link");

/* -------------- event listeners -------------- */
window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        blink(dot);
    }, 1000);
});
navBtn.addEventListener("click", toggleNav);
navLinks.forEach(link=>link.addEventListener("click", navBetweenSections));
/* -------------- functions -------------- */
function blink(element) {
    if(element.classList.contains("blink")) {
        element.classList.remove("blink");
    } else {
        element.classList.add("blink");
    }
}

function toggleNav() {
    let navHeight = links.offsetHeight;
    let containerHeight = navContainer.offsetHeight;
    if(containerHeight === 0) {
        navContainer.style.height = `${navHeight}px`;
        navBtn.classList.add("nic");
    } else {
        navContainer.style.height = `0`;
        navBtn.classList.remove("nic");
    }
}

function navBetweenSections(e) {
    navBtn.classList.remove("nic");
    navContainer.style.height = "0";
    navLinks.forEach(link => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
}