const froheBlock = document.querySelector("#frohe-block");
const buttonOpen = document.getElementById("button");
const firstPage = document.getElementById("first-page");

const tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
const tl2 = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function init() {
  const isMobile = window.outerWidth < 740;
  if (isMobile) {
    gsap.set("#frohe-block", { height: 0 });
  }
  tl.from("#first-page", { ease: "linear", autoAlpha: 0 })
    .from("#snow_1 > *", { stagger: 0.02 })
    .from("#right-circle > *", { stagger: 0.05 }, "<")
    .from("#snow_2 > g", { x: -150, stagger: 0.05 }, "-=1")
    .from("#right-balls > g", {
      y: -220,
      duration: 0.7,
      stagger: { each: 0.1, from: "edges" },
      ease: "bounce",
      onComplete: function () {
        if (isMobile) {
          gsap.to("#frohe-block", {
            height: "auto",
            opacity: 1,
            duration: 0.3,
          });
        }
      },
    })

    .from("#frohe-top > path", { duration: 0.3, stagger: 0.04 })
    .from("#frohe-bottom > path", { duration: 0.44, stagger: 0.04 }, "-=0.3")
    .from("#orbis-bottom-1 > path", { stagger: 0.04 })
    .from(buttonOpen, { duration: 0.4 }, "<");
}

function initSecondPage() {
  firstPage.classList.add("hide");
  tl2
    .from("#second-left", { scale: 0 })
    .from("#second-right", { scale: 0 }, "<");
}

buttonOpen.addEventListener("click", initSecondPage);

window.addEventListener("load", function () {
  init();
});
