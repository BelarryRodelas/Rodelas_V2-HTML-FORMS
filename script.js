const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector("#dropdown > .menu");

// Toggle dropdown menu when dropdown toggle is clicked
dropdownToggle.addEventListener("click", () => {
    event.preventDefault();
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

// Close dropdown menu when clicking outside of it
document.addEventListener("click", (event) => {
    if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
        dropdownMenu.classList.remove("open");
        dropdownToggle.classList.remove("open");
    }
});

const order = document.querySelector(".order");
const cancel = document.querySelector(".cancel");

// Prevent default action for order and cancel buttons
order.addEventListener("click", (event) => {
    event.preventDefault();
});

cancel.addEventListener("click", (event) => {
    event.preventDefault();
});
