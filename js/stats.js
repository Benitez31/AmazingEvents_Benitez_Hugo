import { timeLine } from "./functions.js"

const general = document.getElementById("general");
const upComing_data = document.getElementById("upcoming-data");
const past_data = document.getElementById("past-data");

async function getData() {
    await fetch('../data/amazing.json').then(response => response.json()).then(data => {        

        let pastEvents = [];
        let upComingEvents = [];
        let todaysEvents = [];

        timeLine(data.events, data.currentDate, todaysEvents, upComingEvents, pastEvents);

        let highestPercentage = data.events.sort((a, b) => ((b.assistance ? b.assistance : b.estimate) / b.capacity) * 100 - ((a.assistance ? a.assistance : a.estimate) / a.capacity) * 100)[0].name
        let lowestPercentage = data.events.sort((a, b) => ((a.assistance ? a.assistance : a.estimate) / a.capacity) * 100 - ((b.assistance ? b.assistance : b.estimate) / b.capacity) * 100)[0].name
        let largerCapacity = data.events.sort((a, b) => b.capacity - a.capacity)[0].name

        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${highestPercentage}</td><td>${lowestPercentage}</td><td>${largerCapacity}</td>`
        general.appendChild(tr);

        calculatorRevenues(upComingEvents)
        calculatorPercentageAttendance(upComingEvents)

        loadTableStatisticsByCategory(upComing_data, upComingEvents);

        calculatorRevenues(pastEvents)
        calculatorPercentageAttendance(pastEvents)

        loadTableStatisticsByCategory(past_data, pastEvents);

    })
}
getData();

function loadTableStatisticsByCategory(container, array) {
    let categories = getCategory(array);
    let fragment = document.createDocumentFragment();
    categories.forEach(category => {
        let events = array.filter((item) => item.category === category);        
        let revenues = calculatorRevenues(events);
        let percentageAttendance = calculatorPercentageAttendance(events);
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${category} (${events.length})</td><td>$${revenues}</td><td>${percentageAttendance}%</td>`;
        fragment.appendChild(tr);
    });
    container.appendChild(fragment);
}

function getCategory(array) {
    return new Set(array.map(item => item.category));
}

function calculatorRevenues(array) {
    let revenues = 0;
    array.forEach(event => {
        revenues += (event.assistance ? event.assistance : event.estimate) * event.price;
    });
    return revenues;
}

function calculatorPercentageAttendance(array) {
    let attendance = 0;
    let capacity = 0;
    array.forEach(event => {
        capacity += event.capacity;
        attendance += event.assistance ? event.assistance : event.estimate
    });
    return Math.round((attendance / capacity) * 100);
}

