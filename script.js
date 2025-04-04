document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.header__toggle');
    const navMenu = document.querySelector('.header__nav');
    const hideFamilyBtn = document.getElementById('hide-family-btn');
    const familyModel = document.getElementById('family-model');
 
    hideFamilyBtn.addEventListener('click', () => {
         familyModel.classList.toggle('hidden');
 
        // Update button text
        hideFamilyBtn.textContent = familyModel.classList.contains('hidden')
         ? 'Show Family Models'
         : 'Hide Family Models';
    });
 

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('header__nav--visible');
    });

    // Close navigation menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('header__nav--visible');
        }
    });
});