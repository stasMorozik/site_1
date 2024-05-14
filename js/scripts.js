

const openMenu = () => {
  document.body.style = "height: 100%; overflow: hidden;";

  const mobileNav = document.getElementById("mobile-nav");

  mobileNav.style = "z-index: 1; opacity: 1; width: 100%;";
}

const closeMenu = () => {
  document.body.style = "auto; overflow: auto;";

  const mobileNav = document.getElementById("mobile-nav");

  mobileNav.style = "z-index: -1; opacity: 0; width: 0%;";
}