function displayPlayer(){
    const playerName = (localStorage.getItem('players'))
    console.log(playerName);
    $('#test').append(playerName)
}

displayPlayer();