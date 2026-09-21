onload = () => {
  document.body.classList.remove("container");
};

const messageModal = document.getElementById("messageModal");
const closeMessage = document.querySelector(".close-message");

if (messageModal && closeMessage) {
  closeMessage.addEventListener("click", () => {
    messageModal.classList.remove("visible");
    messageModal.setAttribute("aria-hidden", "true");
  });

  messageModal.addEventListener("click", (event) => {
    if (event.target === messageModal) {
      messageModal.classList.remove("visible");
      messageModal.setAttribute("aria-hidden", "true");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      messageModal.classList.remove("visible");
      messageModal.setAttribute("aria-hidden", "true");
    }
  });
}

