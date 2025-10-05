function(properties, context) {
  const overlay = document.getElementById("problur-overlay");
  const modal = document.getElementById("problur-modal");
  if (!overlay || !modal) {
    console.warn("ProBlur: Overlay not initialized.");
    return;
  }

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.backdropFilter = `blur(${properties.blur_intensity || 10}px)`;
    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
  }, 10);
}

