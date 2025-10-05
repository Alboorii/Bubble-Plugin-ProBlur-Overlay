function(instance, properties, context) {
  const { overlay, modal, message, button } = instance.data;
  if (!overlay || !modal) return;

  const blurIntensity = properties.blur_intensity || 10;
  const overlayColor = properties.overlay_color || "#000000";
  const overlayOpacity = properties.overlay_opacity ?? 0.5;
  const transitionSpeed = properties.transition_speed || 400;

  // Background overlay color + blur
  overlay.style.backgroundColor = `${overlayColor}${Math.round(overlayOpacity * 255).toString(16).padStart(2, "0")}`;
  overlay.style.transition = `backdrop-filter ${transitionSpeed}ms ease, background-color ${transitionSpeed}ms ease`;
  overlay.style.backdropFilter = `blur(${blurIntensity}px)`;

  // Modal animation timing
  modal.style.transition = `transform ${transitionSpeed}ms ease, opacity ${transitionSpeed}ms ease`;

  // Text + Button updates
  message.textContent = properties.message_text || "Upgrade to access this content";
  button.textContent = properties.button_text || "Subscribe Now";
  button.style.background = properties.button_color || "linear-gradient(135deg, #6D5BFF, #00C2FF)";

  // Auto adjust text color depending on overlay brightness
  const c = overlayColor.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  modal.style.color = brightness > 128 ? "#000" : "#fff";
}

