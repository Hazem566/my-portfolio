// icon => nic
// link => active__item
/* ----------- target elements ----------- */
const header = document.getElementById("header");
const linksContainer = document.querySelector(".menu");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".nav__item");
const menuBtn = document.querySelector(".icon");
const sections = document.querySelectorAll("section");
const img = document.querySelector(".img__border");
const bannerText = document.querySelector(".text__container");
const curser = document.querySelector(".curser");
/* -------------- event listeners -------------- */
window.addEventListener("DOMContentLoaded", reloadPage);
window.addEventListener("resize", resizePage);
menuBtn.addEventListener("click", toggleNav);
navLinks.forEach(link=>link.addEventListener("click", navigateBetweenSections));
observeItems(img, "slideTop", "add");
observeItems(bannerText, "slideTop-2", "add");
/* -------------- functions -------------- */
// window event functions
function reloadPage() {
    setHeight();
    blink(curser);
}
function resizePage() {
    setHeight();
    backNavTodefault();
}

// navbar functions
function blink(ele) {
    setInterval(() => {
        if(ele.classList.contains("blink")) ele.classList.remove("blink");
        else ele.classList.add("blink");
    }, 800);
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
    let secName = currentLink.dataset.id;
    if(secName === "home") {
        window.scrollTo({
            top: 0
        });
    } else {
        let secTop = document.getElementById(secName).offsetTop;
        let headerHeight = header.offsetHeight;
        let position = secTop - headerHeight;
        window.scrollTo({
            top: position
        });
    }
}
function backNavTodefault() {
    if(window.innerWidth > 992) {
        linksContainer.style.height = "min-content";
        menuBtn.classList.remove("nic");
    } else {
        linksContainer.style.height = "0";
        menuBtn.classList.remove("nic");
    }
}

// set sections height
function setHeight() {
    let headerHeight = header.offsetHeight;
    sections.forEach(sec => {
        sec.style.height = `calc(100dvh - ${headerHeight}px)`;
    });
}

// set inter sections observers
function observeItems(item, className, classState) {
    let itemObserve = new IntersectionObserver(entrtis => {
        entrtis.forEach(entry => {
            if(classState === "add") {
                if(entry.isIntersecting) {
                     entry.target.classList.add(className);
                }
            } else {
                if(entry.isIntersecting) {
                    entry.target.classList.toggle(className);
                }
            }
        });
    });
    return itemObserve.observe(item);
}


