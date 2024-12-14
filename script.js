document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".pixel-button");
    const inputs = document.querySelectorAll(".pixel-input");

    // Button click animation effect
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            button.style.transform = "translate(4px, 4px)";
            button.style.boxShadow = "0px 0px #000";
        });

        button.addEventListener("mouseup", () => {
            button.style.transform = "translate(0px, 0px)";
            button.style.boxShadow = "4px 4px #000";
        });

        button.addEventListener("mouseout", () => {
            // If the mouse leaves the button, reset the style
            button.style.transform = "translate(0px, 0px)";
            button.style.boxShadow = "4px 4px #000";
        });
    });

    // Pixel border flash effect on input focus
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#ff5f5f"; // Red highlight
            input.style.transition = "border-color 0.3s ease-in-out";
        });

        input.addEventListener("blur", () => {
            input.style.borderColor = "#4d8ef7"; // Return to original color
        });
    });

    // Fake login alert for demonstration purposes
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const email = inputs[0].value;
            const password = inputs[1].value;

            if (email && password) {
                alert("Login successful! (This is a demo.)");
            } else {
                alert("Please enter both Email and Password!");
            }
        });
    });
});
