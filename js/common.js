// Common JS

document.querySelectorAll(".watch-control, .iphone-btn").forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// End of Common JS

// Cube

let x = 0; // x
let y = 20; // y
let z = 0; // z
let bool = true; // bool
let interval; // inter

const cube = document.querySelector(".cube");

// showitem a tag
document.querySelector(".top-x-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-showitem").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

// play button
const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

// End of Cube

// Slideshow

const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(image/slides/slide-bg-${i}.jpg)`;
    div.style.backgroundSize = `cover`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

slideshowDivs();

// images file
const divs = document.querySelectorAll(".slideshow div");

let a = 1;

const slideshow = () => {
  setInterval(() => {
    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    a++;

    if (a < divs.length + 1) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 4000);
};

slideshow();

// End of Slideshow

// Section 3

const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

// End of Section 3

// Section 4

const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisX = 0; // x
let axisY = 0; // y

// Hiden Control
const hidenControl = () => {
  // control btn top
  if (axisY === -350) {
    watchTopControl.classList.add("hidenControl");
  } else {
    watchTopControl.classList.remove("hidenControl");
  }

  // control btn bottom
  if (axisY === 280) {
    watchBottomControl.classList.add("hidenControl");
  } else {
    watchBottomControl.classList.remove("hidenControl");
  }

  // control btn right
  if (axisX === 280) {
    watchRightControl.classList.add("hidenControl");
  } else {
    watchRightControl.classList.remove("hidenControl");
  }

  // control btn left
  if (axisX === -350) {
    watchLeftControl.classList.add("hidenControl");
  } else {
    watchLeftControl.classList.remove("hidenControl");
  }
};

// top
watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hidenControl();
});

// bottom
watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hidenControl();
});

// right
watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hidenControl();
});

// left
watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hidenControl();
});

// End of Section 4

// Section 5

const section5Content = document.querySelector(".section-5");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section5Content.offsetTop + section5Content.offsetHeight / 2
  ) {
    section5Content.classList.add("change");
  }
});

// End of Section 5
