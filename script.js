// JavaScript to handle the click event on subheadings and show/hide the project background

document.addEventListener("DOMContentLoaded", function () {
    const webDevSubheading = document.getElementById("web-development");
    const appsSubheading = document.getElementById("apps");
    const webDevProjectBackground = document.getElementById("web-dev-projects");
    const appsProjectBackground = document.getElementById("apps-projects");

    // Function to toggle project background visibility
    function toggleProjectBackground(projectBackground) {
        if (projectBackground.style.display === "block") {
            // Hide project background
            projectBackground.style.display = "none";
        } else {
            // Show project background
            projectBackground.style.display = "block";
        }
    }

    // Event listener for Web Development subheading
    webDevSubheading.addEventListener("click", function () {
        toggleProjectBackground(webDevProjectBackground);
    });

    // Event listener for Apps subheading
    appsSubheading.addEventListener("click", function () {
        toggleProjectBackground(appsProjectBackground);
    });

    // Initially hide project backgrounds
    webDevProjectBackground.style.display = "none";
    appsProjectBackground.style.display = "none";
});
