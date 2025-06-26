const sections = document.querySelectorAll(".animate-section");
let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY;
      const notYetVisible = !entry.target.classList.contains("visible");

      if (entry.isIntersecting && isScrollingDown && notYetVisible) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
      }
    });

    lastScrollY = window.scrollY;
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  }
);

sections.forEach((section) => observer.observe(section));
