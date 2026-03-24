/**
 * Archelos - Multipurpose Business Theme
 * Core Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Header Scroll Effect
  const header = document.getElementById("site-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        // Adjust shadow
        header.classList.add("shadow-sm");
      } else {
        header.classList.remove("scrolled");
        header.classList.remove("shadow-sm");
      }
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    const toggleMenu = () => {
      mobileMenu.classList.toggle("translate-x-full");
      document.body.classList.toggle("overflow-hidden");
    };

    mobileMenuBtn.addEventListener("click", toggleMenu);
    closeMenuBtn.addEventListener("click", toggleMenu);

    // Close on link click
    mobileLinks.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  }

  // 3. Scroll Reveal Animation using Intersection Observer
  const revealElements = document.querySelectorAll(".scroll-reveal");

  if (revealElements.length > 0) {
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      });
    }, revealOptions);

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

/* PREMIUM LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("site-loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 700);
  }, 600);
});

