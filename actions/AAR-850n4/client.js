function(properties, context) {
  const overlay = document.getElementById("problur-overlay");
  const modal = document.getElementById("problur-modal");
  if (!overlay || !modal) return;

  modal.style.transform = "translateY(40px)";
  modal.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
  }, properties.transition_speed || 400);
}


