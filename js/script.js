const kugel = document.querySelector(".kugel");
const front = document.getElementById("front");

const tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function init() {
  tl.from("#wrap", { ease: "linear", autoAlpha: 0 })
    .from("#dotts > g", {
      stagger: 0.1,
    })
    .from("#circles_right > g", { stagger: 0.1 }, "<")
    .from("#schnee > g", {
      x: -300,
      duration: 0.6,
      stagger: 0.2,
      ease: "power.in",
    })
    .from("#kugel > g", {
      y: -220,
      duration: 0.7,
      stagger: { each: 0.1, from: "edges" },
      ease: "bounce",
      onComplete: function () {
        setTimeout(() => {
          kugel.classList.add("kugel-rotate");
        }, 300);
      },
    })
    .from("#text_1 > path", { duration: 0.3, drawSVG: "100%", stagger: 0.04 })
    .from(
      "#text_2 > path",
      { duration: 0.44, drawSVG: "100%", stagger: 0.04 },
      "-=0.3"
    )
    .from("#text_3", { duration: 0.1 })
    .from("#button", { duration: 0.1 }, "<");
}

window.addEventListener("load", function () {
  init();
});

// GSDevTools.create();
