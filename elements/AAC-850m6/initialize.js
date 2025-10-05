function(instance, context) {
  const overlay = document.createElement("div");
  overlay.id = "problur-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.display = "none";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999999";
  overlay.style.backdropFilter = "blur(0px)";
  overlay.style.transition = "all 0.3s ease";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

  // Center modal box
  const modal = document.createElement("div");
  modal.id = "problur-modal";
  modal.style.textAlign = "center";
  modal.style.padding = "48px 40px";
  modal.style.borderRadius = "20px";
  modal.style.background = "rgba(255, 255, 255, 0.08)";
  modal.style.backdropFilter = "blur(20px)";
  modal.style.boxShadow = "0 8px 40px rgba(0, 0, 0, 0.3)";
  modal.style.maxWidth = "420px";
  modal.style.width = "90%";
  modal.style.transition = "transform 0.4s ease, opacity 0.4s ease";
  modal.style.transform = "translateY(40px)";
  modal.style.opacity = "0";
  modal.style.color = "#ffffff";
  modal.style.fontFamily = "Inter, system-ui, sans-serif";

  // Message
  const message = document.createElement("h2");
  message.id = "problur-message";
  message.style.fontSize = "1.6rem";
  message.style.fontWeight = "600";
  message.style.marginBottom = "24px";
  message.style.lineHeight = "1.4";
  message.textContent = "Upgrade to access this content";

  // Button
  const button = document.createElement("button");
  button.id = "problur-button";
  button.style.padding = "14px 32px";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.fontSize = "1rem";
  button.style.fontWeight = "600";
  button.style.cursor = "pointer";
  button.style.background = "linear-gradient(135deg, #6D5BFF, #00C2FF)";
  button.style.color = "#fff";
  button.style.boxShadow = "0 3px 15px rgba(0,0,0,0.25)";
  button.style.transition = "transform 0.2s ease, opacity 0.2s ease";
  button.textContent = "Subscribe Now";

  button.addEventListener("mouseover", () => (button.style.transform = "scale(1.05)"));
  button.addEventListener("mouseout", () => (button.style.transform = "scale(1)"));

  modal.appendChild(message);
  modal.appendChild(button);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  instance.data.overlay = overlay;
  instance.data.modal = modal;
  instance.data.message = message;
  instance.data.button = button;
}

