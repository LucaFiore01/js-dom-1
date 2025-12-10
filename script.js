// Parte di preparazione
// selezione elemento (bottone)
const button = document.querySelector('.bottone')
// selezione elemento (lampadina)
const offLamp = document.querySelector('.lampadina-spenta')
const onLamp = document.querySelector('.lampadina-accesa')

// gestione accensione lampadina
button.addEventListener('click',
    function () {
      onLamp.classList.add('show')
      offLamp.classList.add('hide')
    }
)


