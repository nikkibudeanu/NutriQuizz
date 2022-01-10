
// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll animation

//scroll variables inspired by --> https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
const scrollElements = document.querySelectorAll(".jsScroll");

// used element.getBoundingClientRect method to get the information about sizing and positions --> inspired by --> https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
const inView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const outofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

// create functions to start/stop animation when scrolling is done +change opacity from 0 to 1 for the scrolled elements
const display = (element) => {
    element.classList.add("done");
};

const hide = (element) => {
    element.classList.remove("done");
};

// create function for scroll animation
const scrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (inView(el, 1.25)) {
            display(el);
        } else if (outofView(el)) {
            hide(el);
        }
    });
};
//add event listener for scrolling
window.addEventListener("scroll", () => {
    scrollAnimation();
});
