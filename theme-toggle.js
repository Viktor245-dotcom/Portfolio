// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.body.classList.add(savedTheme + '-mode');

    // Update theme icon based on saved theme
    updateThemeIcon(savedTheme);

    // Add click event listener to theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.body.classList.remove(currentTheme + '-mode');
            document.body.classList.add(newTheme + '-mode');
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    /**
     * Updates the theme icon based on the current theme
     * @param {string} theme - The current theme ('dark' or 'light')
     */
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i'); // Get the icon element from the theme toggle button
        if (theme === 'dark') { // If the theme is dark
            icon.classList.remove('bi-moon-fill'); // Remove the moon icon class
            icon.classList.add('bi-sun-fill'); // Add the sun icon class
        } else {
            icon.classList.remove('bi-sun-fill'); // Remove the sun icon class
            icon.classList.add('bi-moon-fill'); // Add the moon icon class
        }
    }
});
