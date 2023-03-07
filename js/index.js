import data from "../data/amazing.js";

let cards = '';

const divElement = document.getElementById('cards');

for (let i = 0; i < data.events.length; i++) {

    cards += `<div class="card" style="width: 15rem;">
                    <img src="${data.events[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.events[i].name}</h5>
                        <p class="card-text">${data.events[i].description}</p>
                        <div class="foot-card">
                            <p>Price $${data.events[i].price}</p>
                            <a href="./details.html" class="btn btn-danger">View More</a>
                        </div>
                    </div>    
                </div>`
}
divElement.innerHTML = cards;
