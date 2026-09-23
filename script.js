const canAnimate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".publication-card").forEach((card) => {
  if (!canAnimate) return;

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 3.2;
    const rotateX = (0.5 - (y / rect.height)) * 3.2;

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.25, 0.5] });

  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll("[data-github-stars]").forEach(async (counter) => {
  const repository = counter.dataset.githubStars;

  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) return;

    const data = await response.json();
    const stars = data.stargazers_count;

    if (typeof stars === "number") {
      counter.textContent = new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(stars);
      counter.title = `${stars.toLocaleString("en")} stars`;
    }
  } catch {
    // Keep the fallback count when GitHub's API is unavailable.
  }
});
