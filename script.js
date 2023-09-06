// JavaScript to handle the click event on project links

document.addEventListener("DOMContentLoaded", function () {
    const webDevLink = document.querySelector('a[href="#web-dev-projects"]');
    const appsLink = document.querySelector('a[href="#apps-projects"]');
    const webDevProjectList = document.getElementById("web-dev-projects");
    const appsProjectList = document.getElementById("apps-projects");

    // Function to toggle project list visibility
    function toggleProjectList(projectList) {
        if (projectList.style.display === "block") {
            // Hide project list
            projectList.style.display = "none";
        } else {
            // Show project list
            projectList.style.display = "block";
        }
    }

    // Event listener for Web Development link
    webDevLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        toggleProjectList(webDevProjectList);
    });

    // Event listener for Apps link
    appsLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        toggleProjectList(appsProjectList);
    });
});
