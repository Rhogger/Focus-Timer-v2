import {
  btnPlay,
  btnPause,
  Time,
  minutesDisplay,
  secondsDisplay,
  groupSoundCards,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
} from './src/modules/elements.js'
import Controls from './src/factories/controls.js'
import Timer from './src/factories/timer.js'
import Sounds from './src/factories/sounds.js'
import Events from './src/factories/events.js'

if (window.matchMedia('(min-width: 822px)').matches) {
  groupSoundCards.classList.toggle('hide')
}

const timer = Timer({
  Time,
  minutesDisplay,
  secondsDisplay,
})

const controls = Controls({
  btnPlay,
  btnPause,
})

const sounds = Sounds({
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
  removeSelectedStyle,
})

Events({
  sounds,
  controls,
  timer,
  nonSelectCards
})

function removeSelectedStyle(card1, card2, card3) {
  card1 = card1 === undefined ? null : card1.classList.remove('selected')
  card2 = card2 === undefined ? null : card2.classList.remove('selected')
  card3 = card3 === undefined ? null : card3.classList.remove('selected')
}

function nonSelectCards(card1, card2, card3, card4, opacity) {
  card1 = opacity === '1' ? increaseCardSize(card1, opacity) : decreaseCardSize(card1, opacity)
  card2 = opacity === '1' ? increaseCardSize(card2, opacity) : decreaseCardSize(card2, opacity)
  card3 = opacity === '1' ? increaseCardSize(card3, opacity) : decreaseCardSize(card3, opacity)
}

function decreaseCardSize(card, opacity) {
  card.style.transform = 'scale(0.8)'
  card.style.transition = 'transform .3s'
  card.style.opacity = opacity
}

function increaseCardSize(card, opacity) {
  card.style.transform = 'scale(1)'
  card.style.transition = 'transform .3s'
  card.style.opacity = opacity
}