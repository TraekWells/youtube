const navTriggers = Array.from(document.querySelectorAll("[data-nav-trigger]"));
const subMenus = Array.from(document.querySelectorAll(".navbar__sub-menu"));

const closeAllMenus = () => {
  navTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });
  subMenus.forEach((menu) => menu.classList.remove("active"));
};

const handleToggleMenu = (event) => {
  const trigger = event.currentTarget;
  const sibling = trigger.nextElementSibling;
  const triggerIsActive = trigger.getAttribute("aria-expanded") === "true";

  if (triggerIsActive) {
    trigger.setAttribute("aria-expanded", "false");
    sibling.classList.remove("active");
  } else {
    closeAllMenus();
    trigger.setAttribute("aria-expanded", "true");
    sibling.classList.add("active");
  }
};

navTriggers.forEach((trigger) => {
  trigger.addEventListener("click", handleToggleMenu);
});
