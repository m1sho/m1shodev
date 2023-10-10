



document.addEventListener("DOMContentLoaded", function () {
    const webDevHeading = document.getElementById("web-development");
    const appsHeading = document.getElementById("apps");
    const webDevProjects = document.getElementById("web-dev-projects");
    const appsProjects = document.getElementById("apps-projects");

    webDevHeading.addEventListener("click", function () {
        webDevProjects.classList.toggle("show");
        appsProjects.classList.remove("show"); // Hide Apps projects
    });

    appsHeading.addEventListener("click", function () {
        appsProjects.classList.toggle("show");
        webDevProjects.classList.remove("show"); // Hide Web Development projects
    });


// Subheading Typing Animation Logic

    const subheading = document.getElementById("subheading");
    const textArray = ["Web Developer", "Programmer", "Photographer"];
    let index = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        const currentText = textArray[index];
        const typingDelay = 150;

        if (isTyping) {
            const letter = currentText.charAt(charIndex);
            subheading.innerHTML = currentText.substr(0, charIndex) + `<span class="blinking-cursor">|</span>`;
            charIndex++;

            if (charIndex <= currentText.length) {
                setTimeout(type, typingDelay);
            } else {
                isTyping = false;
                setTimeout(type, 1000);
            }
        } else {
            subheading.innerHTML = currentText.substr(0, charIndex) + `<span class="blinking-cursor">|</span>`;
            charIndex--;

            if (charIndex >= 0) {
                setTimeout(type, 50);
            } else {
                isTyping = true;
                index = (index + 1) % textArray.length;
                charIndex = 0;
                setTimeout(type, 1000);
            }
        }
    }

    type();
});
