// This is for finding out if scrolling up or down so to hide the footer. Found from the website: https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event and https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
// Page isn't long enough, but if you shrink the site it works perfect!

let oldY = scrollY;
let dir = false; // true is down
window.onscroll = (event) => {
    let newY = scrollY;
    if (newY > oldY) {
        dir = true;
    } else {
        dir = false;
    }
    let footer = document.getElementById("footer");
    if (dir) {
        footer.style.display = "none";
    } else {
        footer.style.display = "flex";
    }
}