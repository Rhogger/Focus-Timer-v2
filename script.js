import {
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
} from './modules/elements.js'
import Sounds from './factories/sounds.js'

console.log('Script ativo');

const sounds = Sounds({
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
  removeSelectedStyle
})

forestCard.addEventListener('click', sounds.playForestAudio)

rainCard.addEventListener('click', sounds.playRainAudio)

coffeeCard.addEventListener('click', sounds.playCoffeeStoreAudio)

fireplaceCard.addEventListener('click', sounds.playFireplaceAudio)

function removeSelectedStyle(card1, card2, card3) {
  card1 = card1 === undefined ? null : card1.classList.remove('selected')
  card2 = card2 === undefined ? null : card2.classList.remove('selected')
  card3 = card3 === undefined ? null : card3.classList.remove('selected')
}

