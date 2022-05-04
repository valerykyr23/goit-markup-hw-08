(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const htmlRef = document.querySelector("html");
  const bodyRef = document.querySelector("body");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    htmlRef.classList.toggle("overflow-y-hidden");
    bodyRef.classList.toggle("overflow-y-hidden");
  });
})();