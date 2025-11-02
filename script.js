document.addEventListener("DOMContentLoaded", () => {
  // --- 1. click (کلیک) ---
  const heroButton = document.getElementById("heroCtaButton");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Vielen Dank für Ihren Anruf! (Click Event)");
    });
  }

  // --- 2. submit (ارسال فرم) ---
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Verhindert das Neuladen der Seite
      const emailInput = document.getElementById("emailInput");
      console.log(
        `Formular gesendet! E-Mail: ${emailInput.value} (Submit Event)`
      );
      alert("Danke für Ihre Anmeldung zum Newsletter!");
    });
  }

  // --- 3. mouseover (بردن ماوس روی عنصر) ---
  const collectionCards = document.querySelectorAll(".collection-card");
  collectionCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.backgroundColor = "#f9f5f0"; // رنگ پس‌زمینه روشن (از CSS)
      console.log("Mouseover auf Produktkarte");
    });
  });

  // --- 4. mouseout (خارج شدن ماوس از عنصر) ---
  collectionCards.forEach((card) => {
    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "#FFFFFF"; // رنگ پس‌زمینه سفید
    });
  });

  // --- 5. keydown (فشار دادن دکمه کیبورد) ---
  const emailInput = document.getElementById("emailInput");
  if (emailInput) {
    emailInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        console.log("Enter-Taste im E-Mail-Feld gedrückt! (Keydown Event)");
      }
    });
  }

  // --- 6. load (بارگذاری کامل صفحه) ---
  window.addEventListener("load", () => {
    console.log("Die gesamte Seite (inkl. Bilder) wurde geladen. (Load Event)");
  });

  // --- 7. scroll (اسکرول کردن صفحه) ---
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      header.style.backdropFilter = "blur(5px)"; // افکت شیشه‌ای
    } else {
      header.style.backgroundColor = "#FFFFFF";
      header.style.backdropFilter = "none";
    }
  });

  // --- 8. change (تغییر مقدار) ---
  if (emailInput) {
    emailInput.addEventListener("change", () => {
      console.log(
        `Der E-Mail-Wert hat sich geändert: ${emailInput.value} (Change Event)`
      );
    });
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
