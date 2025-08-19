const { animate, scroll } = Motion;
const ANIMATION_DURATION = 0.2;
const ANIMATION_EASE = "ease-in-out";

const accordionTriggers = Array.from(
  document.querySelectorAll("[data-js-trigger]")
);

const handleAccordionTrigger = (event) => {
  const targetTrigger = event.currentTarget;
  const isOpen = targetTrigger.getAttribute("aria-expanded") === "true";
  const siblingPanel = targetTrigger.nextElementSibling;

  if (isOpen) {
    // Close the accordion
    targetTrigger.setAttribute("aria-expanded", "false");

    // Animate the panel closing
    animate(
      siblingPanel,
      { height: 0, opacity: 0 },
      {
        duration: ANIMATION_DURATION,
        easing: ANIMATION_EASE,
        onComplete: () => {
          siblingPanel.style.display = "none";
        },
      }
    );
  } else {
    // Close any open accordion first
    accordionTriggers.forEach((trigger) => {
      if (trigger.getAttribute("aria-expanded") === "true") {
        const siblingPanel = trigger.nextElementSibling;
        trigger.setAttribute("aria-expanded", "false");
        animate(
          siblingPanel,
          { height: 0, opacity: 0 },
          {
            duration: ANIMATION_DURATION,
            easing: ANIMATION_EASE,
            onComplete: () => {
              siblingPanel.style.display = "none";
            },
          }
        );
      }
    });

    // Open this accordion
    targetTrigger.setAttribute("aria-expanded", "true");

    // Set display to block before measuring height
    siblingPanel.style.display = "block";
    siblingPanel.style.height = "auto";
    const panelHeight = siblingPanel.clientHeight;

    // Set initial state for animation
    siblingPanel.style.height = "0px";
    siblingPanel.style.opacity = "0";

    // Animate the panel opening
    animate(
      siblingPanel,
      { height: panelHeight, opacity: 1 },
      {
        duration: ANIMATION_DURATION,
        easing: ANIMATION_EASE,
      }
    );
  }
};

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", handleAccordionTrigger);

  // Initialize panels to be hidden
  const panel = trigger.nextElementSibling;
  panel.style.display = "none";
  panel.style.height = "0px";
  panel.style.opacity = "0";
});
