// Menu show
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll sections
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

//Scrol Top Button
const scrollButton = document.querySelector(".scroll-top-button");
const aboutSection = document.querySelector("#home");

function toggleScrollButton() {
  if (window.scrollY > aboutSection.offsetTop) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

window.addEventListener("scroll", toggleScrollButton);

toggleScrollButton();
