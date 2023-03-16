import data from "../data/amazing.js";
import { loadCard, loadCheck, categoriesList, categorySearch} from "./functions.js"

const search = document.getElementById('search');
const checkElement = document.getElementById('check');

loadCard(data.events);

let categoriesItems = categoriesList(data.events);


search.addEventListener('input', () => categorySearch(data.events));

checkElement.addEventListener('change', () => categorySearch(data.events));

loadCheck(categoriesItems, checkElement);





