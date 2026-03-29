import { useCallback, useEffect, useState } from "react";

export const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");

      if (
        isMenuOpen &&
        mobileMenu &&
        mobileMenuButton &&
        !mobileMenu.contains(e.target as Node) &&
        !mobileMenuButton.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen, closeMenu]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isMenuOpen, closeMenu]);

  // Apply CSS classes based on menu state
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerLines = document.querySelectorAll(".hamburger-line");

    if (!mobileMenu) return;

    if (isMenuOpen) {
      // Open menu
      mobileMenu.classList.remove("opacity-0", "scale-95", "translate-y-2");
      mobileMenu.classList.add("opacity-100", "scale-100", "translate-y-0");

      // Animate hamburger to X
      if (hamburgerLines.length >= 3) {
        (hamburgerLines[0] as HTMLElement).style.transform =
          "rotate(45deg) translate(5px, 5px)";
        (hamburgerLines[1] as HTMLElement).style.opacity = "0";
        (hamburgerLines[2] as HTMLElement).style.transform =
          "rotate(-45deg) translate(7px, -6px)";
      }
    } else {
      // Close menu
      mobileMenu.classList.remove("opacity-100", "scale-100", "translate-y-0");
      mobileMenu.classList.add("opacity-0", "scale-95", "translate-y-2");

      // Reset hamburger
      if (hamburgerLines.length >= 3) {
        (hamburgerLines[0] as HTMLElement).style.transform =
          "rotate(0) translate(0, 0)";
        (hamburgerLines[1] as HTMLElement).style.opacity = "1";
        (hamburgerLines[2] as HTMLElement).style.transform =
          "rotate(0) translate(0, 0)";
      }
    }
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
};
