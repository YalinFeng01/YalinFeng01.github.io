document.querySelectorAll(".paper-box").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  });
});
