let tutorialContent = document.getElementById('tutorial-content');
let sightReadingContent = document.getElementById('sight-reading-content');

let dateFilter = document.getElementById('date-filter');
let dateFilterIcon = document.getElementById('date-filter-icon');

dateFilter.addEventListener('click', () => {
    if(!tutorialContent.classList.contains('hidden')) {

        let tutorialItemsContainer = document.getElementById('tutorial-content');
        let tutorialItems = tutorialItemsContainer.querySelectorAll('.item');
        tutorialItemsContainer.innerHTML = '';

        tutorialItems.forEach(item => {
            tutorialItemsContainer.prepend(item);
        });

    }

    if(!sightReadingContent.classList.contains('hidden')) {
        let sightReadingItemsContainer = document.getElementById('sight-reading-content');
        let sightReadingItems = sightReadingItemsContainer.querySelectorAll('.item');
        sightReadingItemsContainer.innerHTML = '';

        sightReadingItems.forEach(item => {
            sightReadingItemsContainer.prepend(item);
        });

    }

    dateFilterIcon.classList.toggle('rotate');
});