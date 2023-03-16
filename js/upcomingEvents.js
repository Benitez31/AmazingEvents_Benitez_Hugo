import data from "../data/amazing.js";
import { loadCard, loadCheck, categoriesList, timeLine, categorySearch } from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');

let pastEvents = [];
let upComingEvents = [];
let todaysEvents = [];

timeLine(data.events, todaysEvents, upComingEvents, pastEvents);

/* function categorySearch() {
    let firtsFilter = seeker(upComingEvents, search);

    let secondFilter = checkbox(firtsFilter);
    loadCard(secondFilter);
} */
let categoriesItems = categoriesList(data.events);
loadCheck(categoriesItems, checkElement);
search.addEventListener('input', () =>categorySearch(upComingEvents));

checkElement.addEventListener('change', () =>categorySearch(upComingEvents));


loadCard(upComingEvents);


