import { loadCard, loadCheck, categoriesList, timeLine, categorySearch } from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');

async function getData() {
    await fetch('../data/amazing.json').then(response => response.json()).then(data => {

        let eventsList = data.events;
        let pastEvents = [];
        let upComingEvents = [];
        let todaysEvents = [];

        timeLine(eventsList, data.currentDate, todaysEvents, upComingEvents, pastEvents);

        let categoriesItems = categoriesList(eventsList);

        loadCheck(categoriesItems, checkElement);

        search.addEventListener('input', () => categorySearch(upComingEvents));

        checkElement.addEventListener('change', () => categorySearch(upComingEvents));

        loadCard(upComingEvents);

    })
}
getData();

export default upComingEvents;