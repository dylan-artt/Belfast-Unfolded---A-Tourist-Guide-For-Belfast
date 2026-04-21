const buttons = document.querySelectorAll(".dropdown-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            if (content !== button.nextElementSibling) {
                content.classList.remove("show");
            }
        });

        button.nextElementSibling.classList.toggle("show");
    });
});