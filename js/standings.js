
const apiKey = '0f4632b1f7f96cb7bceeeb391b27f5b2';

const userInput = document.querySelector('#user-input').value;

const apiUrl = `https://v2.nba.api-sports.io/leagues/${userInput}`;

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "0f4632b1f7f96cb7bceeeb391b27f5b2");
myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://v2.nba.api-sports.io/leagues", requestOptions)
    .then(response => response.json())
    .then(data => {
        // displat fetched data on the webpage
        document.querySelector('#output').innerText = JSON.stringify(data, null, 2);
    })

    .catch(error => console.log('error', error));
