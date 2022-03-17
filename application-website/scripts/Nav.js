const navIconDiv = document.querySelector(".nav__icon");
const navItems = ["About", "Projects", `Paddy<span>fun</span>facts`];

navIconDiv.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");

  nav.classList.toggle("nav--active");
  setTimeout(handleOverlay, 170);
}

function createListItems() {
  const navList = document.querySelector(".nav__list");

  navItems.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = item;
    li.classList.add("nav__item");
    navList.append(li);
  });
}

function handleOverlay() {
  const overlayDiv = document.querySelector(".overlay");
  if (overlayDiv) overlayDiv.remove();
  else {
    const body = document.querySelector("body");
    const overlayNewDiv = document.createElement("div");

    overlayNewDiv.classList.add("overlay");
    body.append(overlayNewDiv);
  }
}

createListItems();
