import data from "../data/amazing.js";


let pastEvents = [];
let upComingEvents = [];
let todaysEvents = [];

for (let i = 0; i < data.events.length; i++) {
    if (data.events[i].date == data.currentDate) {
        todaysEvents.push(data.events[i]);

    } else if (data.events[i].date > data.currentDate) {
        upComingEvents.push(data.events[i]);

    } else {
        pastEvents.push(data.events[i]);
    }
}
pastEvents.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
});

upComingEvents.sort((a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
});

console.table(todaysEvents);
console.table(pastEvents);
console.table(upComingEvents);

let cards = '';

const divElement = document.getElementById('cards');

for (let i = 0; i < upComingEvents.length; i++) {

    cards += `<div class="card" style="width: 15rem;">
                    <img src="${upComingEvents[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${upComingEvents[i].name}</h5>
                        <p class="card-text">${upComingEvents[i].description}</p>
                        <div class="foot-card">
                            <p>Price $${upComingEvents[i].price}</p>
                            <a href="./details.html" class="btn btn-danger">View More</a>
                        </div>
                    </div>    
                </div>`
}
divElement.innerHTML = cards;