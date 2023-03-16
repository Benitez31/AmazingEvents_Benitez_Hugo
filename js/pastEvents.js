import data from "../data/amazing.js";
import { loadCard, loadCheck, categoriesList, timeLine, categorySearch } from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');

let pastEvents = [];
let upComingEvents = [];
let todaysEvents = [];

timeLine(data.events, todaysEvents, upComingEvents, pastEvents);

let categoriesItems = categoriesList(data.events);

loadCheck(categoriesItems, checkElement);

search.addEventListener('input', () => categorySearch(pastEvents));

checkElement.addEventListener('change', () => categorySearch(pastEvents));


loadCard(pastEvents);