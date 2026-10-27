
// انتظار تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".link-button");

  // إظهار الأزرار بالتدريج عند فتح الصفحة
  buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(8px)";

    window.setTimeout(() => {
      button.style.transition =
        "opacity 350ms ease, transform 350ms ease, background-color 180ms ease, box-shadow 180ms ease";

      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, 100 + index * 70);
  });
});
