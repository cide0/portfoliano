let tutorialContent = document.getElementById('tutorial-content');
let sightReadingContent = document.getElementById('sight-reading-content');

let tutorialItemsTemplate = document.getElementById('tutorial-items-template');
let sightReadingItemsTemplate = document.getElementById('sight-reading-items-template');

let tutorialNavbarButton = document.getElementById('tutorial-navbar-button');
let sightReadingNavbarButton = document.getElementById('sight-reading-navbar-button');

let searchInput = document.getElementById('search-input');

let dateFilterIcon = document.getElementById('date-filter-icon');

tutorialContent.innerHTML = tutorialItemsTemplate.innerHTML;

tutorialNavbarButton.addEventListener('click', () => {
    tutorialContent.innerHTML = tutorialItemsTemplate.innerHTML;

    tutorialContent.classList.remove('hidden');
    sightReadingContent.classList.add('hidden');

    tutorialNavbarButton.classList.add('active');
    sightReadingNavbarButton.classList.remove('active');

    window.scrollTo({top: 0});

    searchInput.value = '';

    dateFilterIcon.classList.remove('rotate');
});

sightReadingNavbarButton.addEventListener('click', () => {
    sightReadingContent.innerHTML = sightReadingItemsTemplate.innerHTML;

    tutorialContent.classList.add('hidden');
    sightReadingContent.classList.remove('hidden');

    tutorialNavbarButton.classList.remove('active');
    sightReadingNavbarButton.classList.add('active');

    window.scrollTo({top: 0});

    searchInput.value = '';

    dateFilterIcon.classList.remove('rotate');
});