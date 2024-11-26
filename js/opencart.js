const tlOpen = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function initOpencart() {
  tlOpen
    .from("#wrap-opencart", { ease: "linear", autoAlpha: 0 })
    .from("#back-left", { scaleX: 0, duration: 1 })
    .from("#back-right", { scaleX: 0, duration: 1 }, "<");
}

window.addEventListener("load", function () {
  initOpencart();
});

// GSDevTools.create();
