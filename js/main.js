/* ===== STARS ===== */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = Array.from({ length: 160 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  dx: Math.random() * 0.4
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.x += s.dx;
    if (s.x > canvas.width) s.x = 0;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "#F5F2F2";
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

/* ===== SKILLS ===== */
document.querySelectorAll(".skill button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.querySelector("span").style.width =
      btn.dataset.level + "%";
  });
});

/* ===== MENU ===== */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ===== LIQUID EFFECT (SOLO BOTONES) ===== */
document.querySelectorAll(".liquid").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    btn.style.setProperty("--x", `${x}%`);
    btn.style.setProperty("--y", `${y}%`);
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.removeProperty("--x");
    btn.style.removeProperty("--y");
  });
});
