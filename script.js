/* =========================
   ALWAYS START FROM TOP
========================= */

history.scrollRestoration = "manual";

window.addEventListener("load", () => {

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

});

/* =========================
   BRANDS AUTO SCROLL
========================= */

const brandsTrack = document.getElementById("brandsTrack");

let scrollPos = 0;
let lastTimestamp = 0;

function autoScroll(timestamp){

  if(!lastTimestamp){
    lastTimestamp = timestamp;
  }

  const delta = timestamp - lastTimestamp;

  lastTimestamp = timestamp;

  scrollPos += delta * 0.05;

  const trackWidth = brandsTrack.scrollWidth / 2;

  if(scrollPos >= trackWidth){
    scrollPos = 0;
  }

  brandsTrack.style.transform =
    `translateX(${-scrollPos}px)`;

  requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll);

/* =========================
   SOCIAL CARD POPUP
========================= */

const socialCards =
  document.querySelectorAll(".social-card");

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

socialCards.forEach((card) => {
  observer.observe(card);
});