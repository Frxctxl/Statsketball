const playerName = (localStorage.getItem('players'))
const optionsContainer = document.querySelector('#players')

$.get({
    url: `https://api.balldontlie.io/v1/players?search=${playerName}`,

    headers: {
        Authorization: '7289a625-7231-4111-b11a-1edc7f4412d2',
    }
})
    .then(function (data) {
        // for (player of data){
        //     displayPlayer(player)
        // }
        data.data.forEach((element) => displayPlayer(element));
    })

function displayPlayer(player) {
    console.log(player)
    $('#players').append(`
        <button class="button mb-2" data-id="${player.id}">${player.first_name} ${player.last_name}</button>
    `)
}

// displayPlayer();