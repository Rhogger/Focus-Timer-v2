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
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
})

forestCard.addEventListener('click', () => {
  removeSelectedStyle(rainCard, coffeeCard, fireplaceCard)
  sounds.pauseAudio(rainAudio, coffeeStoreAudio, fireplaceAudio)

  if (!forestCard.classList.contains('selected')) {
    forestCard.classList.add('selected')
    forestAudio.play()
  } else {
    removeSelectedStyle(forestCard)
    sounds.pauseAudio(forestAudio)
  }
})

rainCard.addEventListener('click', () => {
  removeSelectedStyle(forestCard, coffeeCard, fireplaceCard)
  sounds.pauseAudio(forestAudio, coffeeStoreAudio, fireplaceAudio)

  if (!rainCard.classList.contains('selected')) {
    rainCard.classList.add('selected')
    rainAudio.play()
  } else {
    removeSelectedStyle(rainCard)
    sounds.pauseAudio(rainAudio)
  }
})

coffeeCard.addEventListener('click', () => {
  removeSelectedStyle(forestCard, rainCard, fireplaceCard)
  sounds.pauseAudio(forestAudio, rainAudio, fireplaceAudio)

  if (!coffeeCard.classList.contains('selected')) {
    coffeeCard.classList.add('selected')
    coffeeStoreAudio.play()
  } else {
    removeSelectedStyle(coffeeCard)
    sounds.pauseAudio(coffeeStoreAudio)
  }
})

fireplaceCard.addEventListener('click', () => {
  removeSelectedStyle(forestCard, rainCard, coffeeCard)
  sounds.pauseAudio(forestAudio, coffeeStoreAudio, rainAudio)

  if (!fireplaceCard.classList.contains('selected')) {
    fireplaceCard.classList.add('selected')
    fireplaceAudio.play()
  } else {
    removeSelectedStyle(fireplaceCard)
    sounds.pauseAudio(fireplaceAudio)
  }
})

function removeSelectedStyle(card1, card2, card3) {
  card1 = card1 === undefined ? null : card1.classList.remove('selected')
  card2 = card2 === undefined ? null : card2.classList.remove('selected')
  card3 = card3 === undefined ? null : card3.classList.remove('selected')
}

