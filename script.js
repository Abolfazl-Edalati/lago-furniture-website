document.addEventListener("DOMContentLoaded", () => {
  // انتخاب تمام لینک‌های ناوبری که با # شروع می‌شوند
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // جلوگیری از رفتار پیش‌فرض پرش
      e.preventDefault();

      // دریافت ID بخش مقصد
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // محاسبه فاصله از بالای صفحه با در نظر گرفتن ارتفاع هدر
        // اگر هدر شما ثابت (sticky) است، این کار ضروری است
        const header = document.getElementById("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        // اسکرول نرم به بخش مورد نظر
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
