// JavaScript to handle the click event on subheadings

document.addEventListener("DOMContentLoaded", function () {
    const webDevSubheading = document.getElementById("web-development");
    const appsSubheading = document.getElementById("apps");
    const webDevProjectList = document.getElementById("web-dev-projects");
    const appsProjectList = document.getElementById("apps-projects");

    // Function to toggle project list visibility
    function toggleProjectList(projectList) {
        if (projectList.style.opacity === "1") {
            // Hide project list
            projectList.style.opacity = "0";
            projectList.style.zIndex = "-1";
        } else {
            // Show project list
            projectList.style.opacity = "1";
            projectList.style.zIndex = "1";
        }
    }

    // Event listener for Web Development subheading
    webDevSubheading.addEventListener("click", function () {
        toggleProjectList(webDevProjectList);
    });

    // Event listener for Apps subheading
    appsSubheading.addEventListener("click", function () {
        toggleProjectList(appsProjectList);
    });
});
