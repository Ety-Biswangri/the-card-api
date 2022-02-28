const cardContainer = document.getElementById('cards-container');

const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);
    // console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") {
        // alert('Please enter a number');
        error.innerText = "Please enter a number";
        input.value = '';
        cardContainer.innerHTML = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "Please enter a positive number";
        input.value = '';
        cardContainer.innerHTML = '';
    }
    else {
        cardContainer.textContent = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(response => response.json())
            .then(data => displayCards(data.cards))

        input.value = '';
        error.innerText = '';
    }
}

const displayCards = cards => {
    // cards = cards.cards;
    for (const card of cards) {
        // console.log(card);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
           <img src="${card.image}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
                <button onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `;
        cardContainer.appendChild(div);
    }
}

const cardDetails = (code) => {
    // console.log(code);
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(response => response.json())
        .then(data => {
            const allCards = data.cards;
            // console.log(allCards);
            const singleCard = allCards.find(card => card.code === code);
            console.log(singleCard);

            const div = document.createElement('div');
            cardContainer.innerHTML = '';
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
               <img src="${singleCard.image}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${singleCard.suit}</h5>
                  <p class="card-text">${singleCard.code}</p>
                  <p class="card-text">${singleCard.value}</p>
                </div>
            </div>
            `;
            cardContainer.appendChild(div);
        })
}