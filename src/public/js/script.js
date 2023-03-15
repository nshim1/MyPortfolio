const menu = document.getElementById("hamburger");

menu.addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("no-display");
  const mainContainer = document.querySelector(".main-container");

  if (mainContainer) {
    console.log(document.getElementById("nav")?.clientHeight);
    mainContainer.style.paddingTop = `${
      document.getElementById("nav")?.clientHeight
    }px`;
  }
});
