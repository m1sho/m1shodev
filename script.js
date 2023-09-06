// JavaScript code for handling project subheading click events
document.addEventListener("DOMContentLoaded", function () {
    const webDevelopmentSubheading = document.getElementById("web-development");
    const appsSubheading = document.getElementById("apps");
    const webDevProjects = document.getElementById("web-dev-projects");
    const appsProjects = document.getElementById("apps-projects");

    // Hide all project lists initially
    webDevProjects.style.display = "none";
    appsProjects.style.display = "none";

    // Add click event listeners to subheadings
    webDevelopmentSubheading.addEventListener("click", function () {
        webDevProjects.style.display = "block";
        appsProjects.style.display = "none";
    });

    appsSubheading.addEventListener("click", function () {
        webDevProjects.style.display = "none";
        appsProjects.style.display = "block";
    });
});
