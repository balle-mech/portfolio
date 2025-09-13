// Wait for DOM to be fully loaded
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

let isMenuOpen = false;

// Toggle menu function with smooth animation
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // Open menu - smooth dropdown animation
    mobileMenu.classList.remove("opacity-0", "scale-95", "translate-y-2");
    mobileMenu.classList.add("opacity-100", "scale-100", "translate-y-0");

    // Animate hamburger to X
    hamburgerLines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    // Close menu
    mobileMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "scale-95", "translate-y-2");

    // Animate X back to hamburger
    hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
    hamburgerLines[1].style.opacity = "1";
    hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
  }
}

// Close menu function
function closeMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    mobileMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "scale-95", "translate-y-2");

    // Reset hamburger
    hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
    hamburgerLines[1].style.opacity = "1";
    hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
  }
}

// Toggle mobile menu on button click
mobileMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close mobile menu when clicking on links
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    isMenuOpen &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuButton.contains(e.target)
  ) {
    closeMenu();
  }
});

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) {
    closeMenu();
  }
  });
