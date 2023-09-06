// JavaScript for opening/closing project backgrounds
const subheadings = document.querySelectorAll('.subheading');
const projectBackgrounds = document.querySelectorAll('.project-background');

// Add click event listeners to subheadings
subheadings.forEach((subheading, index) => {
    subheading.addEventListener('click', () => {
        // Close all project backgrounds
        projectBackgrounds.forEach((background, bgIndex) => {
            if (bgIndex !== index) {
                background.style.display = 'none';
            }
        });

        // Toggle the display of the corresponding project background
        projectBackgrounds[index].style.display =
            projectBackgrounds[index].style.display === 'block' ? 'none' : 'block';
    });
});

// Close project backgrounds when the close button is clicked
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        projectBackgrounds[index].style.display = 'none';
    });
});
