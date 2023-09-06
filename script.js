// Get project background elements
const webDevBackground = document.getElementById('web-dev-background');
const appsBackground = document.getElementById('apps-background');

// Get subheading elements
const webDevSubheading = document.getElementById('web-development');
const appsSubheading = document.getElementById('apps');

// Add click event listeners to subheadings
webDevSubheading.addEventListener('click', () => {
    toggleProjectBackground(webDevBackground);
});

appsSubheading.addEventListener('click', () => {
    toggleProjectBackground(appsBackground);
});

// Function to toggle project background
function toggleProjectBackground(background) {
    // Close all project backgrounds
    closeAllProjectBackgrounds();

    // Toggle the selected background
    background.style.display = 'flex';

    // Close button
    const closeButton = background.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        background.style.display = 'none';
    });
}

// Function to close all project backgrounds
function closeAllProjectBackgrounds() {
    webDevBackground.style.display = 'none';
    appsBackground.style.display = 'none';
}
