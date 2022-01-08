// button variable
var button = document.getElementById("to-top-btn");


// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// scroll animation

//scroll variables
const scrollElements = document.querySelectorAll(".jsScroll");

const inView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const outofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const display = (element) => {
  element.classList.add("done");
};

const hide = (element) => {
  element.classList.remove("done");
};

const scrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (inView(el, 1.25)) {
      display(el);
    } else if (outofView(el)) {
      hide(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  scrollAnimation();
});
