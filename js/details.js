const detail = document.getElementById("detail");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventId = params.get('id');




async function getData(){
    await fetch('../data/amazing.json').then(response => response.json()).then(data => {
        const cardEvent = data.events.find(item => item._id == eventId);
        cardDetails(cardEvent, detail);
    })
}
getData();
function cardDetails(cardEvent, detail) {
    let div = document.createElement("div");

    div.classList = 'datalist d-flex gap-2'
    div.innerHTML = `<figure><img class="dataimg" src="${cardEvent.image}" alt=""></figure>
                     <div>
                        <ul>
                            <li>Name: ${cardEvent.name}.</li>
                            <li>Date: ${cardEvent.date}.</li>
                            <li>Description: ${cardEvent.description}</li>
                            <li>Category: ${cardEvent.category}.</li>
                            <li>Place: ${cardEvent.place}.</li>
                            <li>Capacity: ${cardEvent.capacity}.</li>
                            <li>Assistance/Estimate: ${cardEvent.assistance? cardEvent.assistance: cardEvent.estimate}.</li>
                            <li>Price: $${cardEvent.price}.</li>
                        </ul>
                     </div>
                     <input id='back' type="button" value="Go Back" onClick="history.go(-1);">
                     `;

    detail.appendChild(div);
}



