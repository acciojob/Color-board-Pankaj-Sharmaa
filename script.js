document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#3498db"; // Change the background color on hover
        });

        square.addEventListener("mouseleave", () => {
            // Revert the background color after 1 second
            setTimeout(() => {
                square.style.backgroundColor = "#fff";
            }, 1000);
        });
    });
});
