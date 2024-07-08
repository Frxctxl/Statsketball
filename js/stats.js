const playerName = (localStorage.getItem('players'))
const optionsContainer = document.querySelector('#players')

$.get({
  url: `https://api.balldontlie.io/v1/players?search=${playerName}`,

  headers: {
    Authorization: '7289a625-7231-4111-b11a-1edc7f4412d2',
  }
})
  .then(function (data) {
    data.data.forEach((element) => displayPlayer(element));

    $('#players').on('click', 'button', selectPlayer);
  })

function displayPlayer(player) {
  $('#players').append(`<button class="button player mb-2" id="${player.id}">${player.first_name} ${player.last_name}</button>`)
}

function selectPlayer(card) {
  playerId = card.target.id;
  $.get({
    url: `https://api.balldontlie.io/v1/players/${playerId}`,

    headers: {
      Authorization: '7289a625-7231-4111-b11a-1edc7f4412d2',
    }
  })
    .then(function (data) {
      console.log(data.data);
      $('#teamImg').attr("src", `css/images/logos/${data.data.team.id}.png`)
      $('#playerName').text(`${data.data.first_name} ${data.data.last_name}`)
      $('#teamName').text(data.data.team.full_name)
      $('#playerPos').text(`College: ${data.data.college}`);
      $('#playerNum').text(`Jersey: #${data.data.jersey_number}`);
      $('#draftYear').text(`Draft Year: ${data.data.draft_year}`);
      $('#roundPick').text(`Round Pick: ${data.data.draft_round}`);
      $('#height').text(`Height: ${data.data.height}`);
      $('#weight').text(`Weight: ${data.data.weight} lbs.`);
      $('#player-card').removeClass('is-hidden');
    })
}

