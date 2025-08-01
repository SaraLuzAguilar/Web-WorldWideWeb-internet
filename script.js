// --- Scroll reveal on section view ---
const sections = document.querySelectorAll("section.scroll-reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// --- Smooth scroll for navigation links ---
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- Timeline logic ---
const timelineList = document.getElementById("timeline-list");
const nextBtn = document.getElementById("load-next-year");
const prevBtn = document.getElementById("load-prev-year");

const events = [
  "1969 – ARPANET is created, the foundation of the Internet",
  "1973 – First transatlantic connection (UK and Norway join ARPANET)",
  "1983 – TCP/IP becomes the standard protocol for the Internet",
  "1989 – Tim Berners-Lee proposes the World Wide Web",
  "1991 – The first website goes live",
  "1998 – Google is founded",
  "2004 – Facebook is launched",
  "2007 – The iPhone launches and revolutionizes mobile web access",
  "2014 – HTML5 becomes an official W3C standard",
];

let currentIndex = 0;

function renderTimeline() {
  timelineList.innerHTML = "";
  for (let i = 0; i <= currentIndex; i++) {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.textContent = events[i];
    timelineList.appendChild(li);
  }

  // Disable buttons at bounds
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === events.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < events.length - 1) {
    currentIndex++;
    renderTimeline();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderTimeline();
  }
});

// Initialize timeline
renderTimeline();
