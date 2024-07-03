const playerName = (localStorage.getItem('players'))

$.get({
    url:`https://api.balldontlie.io/v1/players?search=${playerName}`,

    headers: {
        Authorization: '7289a625-7231-4111-b11a-1edc7f4412d2',
    }
})
    .then (function(data){
    // for (player of data){
    //     displayPlayer(player)
    // }
    data.data.forEach((element) => displayPlayer(element));
    })

function displayPlayer(player){
    console.log(player)
$('#players').append(`<div class="card">${player.first_name} ${player.last_name}</div>`)
}

function selectPlayer(card){
    console.log(card.val())
}

$('.card').on('click', selectPlayer(eventObj))

displayPlayer();