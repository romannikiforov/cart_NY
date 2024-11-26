const tlOpen = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

function initOpencart() {
  tlOpen
    .from("#wrap-opencart", { ease: "linear", autoAlpha: 0 })
    .from("#back-left", { scaleX: 0, duration: 1 })
    .from("#back-right", { scaleX: 0, duration: 1 }, "<")
    .from(".sign_bottom > path", { stagger: 0.04, duration: 0.3 })
    .from("#orbix_textil_top > *", { stagger: 0.04, duration: 0.4 })
    .from("#orbix-textil_bottom > *", { stagger: 0.04, duration: 0.4 });
}

window.addEventListener("load", function () {
  initOpencart();
});
