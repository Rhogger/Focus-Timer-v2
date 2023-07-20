import {
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  minutesDisplay,
  secondsDisplay,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
} from './modules/elements.js'
import Controls from './factories/controls.js'
import Timer from './factories/timer.js'
import Sounds from './factories/sounds.js'
import Events from './factories/events.js'

console.log('Script ativo');

const timer = Timer({
  Time,
  minutesDisplay,
  secondsDisplay,
})

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  timer,
  minutesDisplay,
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
  controls,
  sounds,
})

function removeSelectedStyle(card1, card2, card3) {
  card1 = card1 === undefined ? null : card1.classList.remove('selected')
  card2 = card2 === undefined ? null : card2.classList.remove('selected')
  card3 = card3 === undefined ? null : card3.classList.remove('selected')
}

