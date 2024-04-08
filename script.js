const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", () => {

    event.preventDefault();

    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

function cancelOrder() {
    document.getElementById("orderForm").reset();
}
