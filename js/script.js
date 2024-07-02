$('.modalOn').on('click', showModal);
$('.modal-close').on('click', closeModal);
$('#userSubmit').on('click', acceptInput)


function showModal(){
    $('.modal').addClass('is-active');
}

function closeModal(){
    $('.modal').removeClass('is-active');
}

function acceptInput(eventObj){
    eventObj.preventDefault();
    const txt = $('#playerName').val();
    localStorage.setItem('players', txt);
    window.location.href = '../stats.html'
}

