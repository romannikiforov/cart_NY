const tlOpen = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function initOpencart() {
  tlOpen
    .from("#second", { ease: "linear", autoAlpha: 0 })
    .from("#second-left", { scaleX: 0, duration: 1 })
    .from("#second-right", { scaleX: 0, duration: 1 }, "<")
    .from(".sign_bottom > path", { stagger: 0.04, duration: 0.3 })
    .from("#orbis-textill-top > *", { stagger: 0.04, duration: 0.4 })
    .from("#orbis-textill-bottom > *", { stagger: 0.04, duration: 0.4 })
    .from("#button-second", { duration: 0.2 }, "<");
}

window.addEventListener("load", function () {
  initOpencart();
});
