import { loadCard, loadCheck, categoriesList, timeLine, categorySearch } from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');

async function getData() {
    await fetch('../data/amazing.json').then(response => response.json()).then(data => {
        let pastEvents = [];
        let upComingEvents = [];
        let todaysEvents = [];
        
        timeLine(data.events, data.currentDate, todaysEvents, upComingEvents, pastEvents);
        
        let categoriesItems = categoriesList(data.events);
        
        loadCheck(categoriesItems, checkElement);
        
        search.addEventListener('input', () => categorySearch(pastEvents));
        
        checkElement.addEventListener('change', () => categorySearch(pastEvents));
        
        
        loadCard(pastEvents); 
    })
}

getData();