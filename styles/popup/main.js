// Get elements
const popup = document.getElementById("popup");
const openButton = document.getElementById("openPopup");
const closeButton = document.getElementById("closePopup");
const body = document.body;

// Show popup and disable background
openButton.addEventListener("click", () => {
    popup.style.display = "flex"; // Show the popup
    body.classList.add("modal-active"); // Add a class to disable the background
});

// Hide popup and re-enable background
closeButton.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the popup
    body.classList.remove("modal-active"); // Remove the class to re-enable the background
});

// Close popup when clicking outside the content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        body.classList.remove("modal-active");
    }
});
