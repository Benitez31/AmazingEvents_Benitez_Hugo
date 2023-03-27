import { loadCard, loadCheck, categoriesList, categorySearch } from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');
const form = document.forms[0];


async function getData() {
    await fetch('../data/amazing.json').then(response => response.json()).then(data => {
            
            let eventsList = data.events;
            let categoriesItems = categoriesList(eventsList);

            loadCheck(categoriesItems, checkElement);
            loadCard(eventsList);
            search.addEventListener('input', () => categorySearch(eventsList));
            checkElement.addEventListener('change', () => categorySearch(eventsList));
            


        }).catch(err => console.error(err));
}
getData();











