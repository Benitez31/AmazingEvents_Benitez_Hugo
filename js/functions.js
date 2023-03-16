import data from '../data/amazing.js';

const divElement = document.getElementById('cards');
//carga las cards
export function loadCard(array) {
    let element = '';
    if (array.length == 0) {
        divElement.innerHTML = `<img class= "error" src="./images/404-error.png" alt="error">`
        return
    }
    for (let i = 0; i < array.length; i++) {

        element += `<div class="card" style="width: 18rem;">
                        <img src="${array[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${array[i].name}</h5>
                            <p class="card-text">${array[i].description}</p>
                            <div class="foot-card">
                                <p>Price $${array[i].price}</p>
                                <a href="./details.html?id=${array[i]._id}" class="btn btn-danger">View More</a>
                            </div>                            
                        </div>    
                    </div>`
    }
    divElement.innerHTML = element;
}
//separa por line de tiempo
export function timeLine(array, arrayToday, arrayFuture, arrayPast) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].date == data.currentDate) {
            arrayToday.push(array[i]);

        } else if (array[i].date > data.currentDate) {
            arrayFuture.push(array[i]);

        } else {
            arrayPast.push(array[i]);
        }
    }
    arrayFuture.sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
    });

    arrayPast.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
    });

    console.table(arrayToday);
    console.table(arrayFuture);
    console.table(arrayPast);
}
//buscador
export function seeker(array, element) {
    let arrayFilter = array.filter((e) => e.name.toLowerCase().includes(element.value.toLowerCase()))
    return arrayFilter;
}
//crea los  checkbox
export function loadCheck(array, element) {
    let fragment = document.createDocumentFragment();
    for (const item of array) {
        let div = document.createElement('div');
        div.classList = 'form-check form-check-inline';
        div.innerHTML = `<input class="form-check-input" type="checkbox" name='categoriesItems' role="switch" id="${item.toLowerCase()}" value="${item.toLowerCase()}">
        <label class="form-check-label" for="${item.toLowerCase()}">${item}</label>`
        fragment.appendChild(div);
    }
    element.appendChild(fragment);
}
//crea los valores de checkbox
export function categoriesList(array) {
    let categories = array.map(item => item.category);
    let nonRepeatedCategory = new Set(categories);
    let arrayCategorias = Array.from(nonRepeatedCategory);
    console.log(arrayCategorias);
    return arrayCategorias;
}
//filtra categorias de los chekboxs
export function checkbox(array) {
    let checks = document.querySelectorAll('input[class="form-check-input"]');
    let arrayChecks = Array.from(checks);
    let chequeds = arrayChecks.filter(check => check.checked);
    let checkMapsValue = chequeds.map(checkChecked => checkChecked.value);
    if (chequeds.length > 0) {
        let arrayResult = array.filter(item => checkMapsValue.includes(item.category.toLowerCase()));
        return arrayResult;
    } else {
        return array;
    }

}
//*conbina los metodos de busqueda
export function categorySearch(array) {
    let firtsFilter = seeker(array, search);
    let secondFilter = checkbox(firtsFilter);
    loadCard(secondFilter);
}

