document.querySelectorAll("p-dv").forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      rotation: 100,
      xPercent: 300,
      ease: "back",
      duration: 0.5,
    });
  });