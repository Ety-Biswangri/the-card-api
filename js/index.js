const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = input.value;
    // console.log(inputValue)
    if (isNaN(inputValue) || inputValue == "") {
        // alert('Please enter a number');
        error.innerText = "Please enter a number";
        input.value = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "Please enter a positive number";
        input.value = '';
    }
    else {
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
            .then(response => response.json())
            .then(data => console.log(data))
    }
}
