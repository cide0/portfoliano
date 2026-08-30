let tutorialContent = document.getElementById('tutorial-content');
let sightReadingContent = document.getElementById('sight-reading-content');

let searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    let searchValue = e.target.value.toLowerCase();

    if(!tutorialContent.classList.contains('hidden')) {
        const sightReadingItems = document.querySelectorAll('.tutorial-item-title');
        sightReadingItems.forEach(item => {
            let itemText = item.innerText.toLowerCase();
            if(itemText.includes(searchValue)){
                item.parentElement.parentElement.classList.remove('hidden');
            } else {
                item.parentElement.parentElement.classList.add('hidden');
            }
        });
    }

    if(!sightReadingContent.classList.contains('hidden')) {
        const sightReadingItems = document.querySelectorAll('.sight-reading-item-title');
        sightReadingItems.forEach(item => {
            let itemText = item.innerText.toLowerCase();
            if(itemText.includes(searchValue)){
                item.parentElement.parentElement.classList.remove('hidden');
            } else {
                item.parentElement.parentElement.classList.add('hidden');
            }
        });
    }
});