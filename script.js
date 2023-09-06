// Add event listeners for subheading clicks
document.getElementById("web-development").addEventListener("click", function () {
    toggleProjectBackground("web-dev-background");
});

document.getElementById("programming").addEventListener("click", function () {
    toggleProjectBackground("programming-background");
});

// Add event listeners for close button clicks
document.getElementById("web-dev-close").addEventListener("click", function (event) {
    event.stopPropagation();
    toggleProjectBackground("web-dev-background");
});

document.getElementById("programming-close").addEventListener("click", function (event) {
    event.stopPropagation();
    toggleProjectBackground("programming-background");
});

// Function to toggle project background
function toggleProjectBackground(backgroundId) {
    var background = document.getElementById(backgroundId);
    if (background.style.display === "block") {
        background.style.display = "none";
    } else {
        // Hide all backgrounds before showing the clicked one
        var allBackgrounds = document.querySelectorAll(".project-background");
        for (var i = 0; i < allBackgrounds.length; i++) {
            allBackgrounds[i].style.display = "none";
        }
        background.style.display = "block";
    }
}
