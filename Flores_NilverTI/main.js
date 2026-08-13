onload = () => {
  document.body.classList.remove("container");
};

const floatingLetter = document.getElementById("floatingLetter");
const messageModal = document.getElementById("messageModal");
const closeMessage = document.querySelector(".close-message");

if (floatingLetter && messageModal && closeMessage) {
  floatingLetter.addEventListener("click", () => {
    messageModal.classList.add("visible");
    messageModal.setAttribute("aria-hidden", "false");
  });

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
