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
  sounds.pauseAudio()
  removeSelectedStyle()
  forestCard.classList.add('selected')
  forestAudio.play()
})

rainCard.addEventListener('click', () => {
  sounds.pauseAudio()
  removeSelectedStyle()
  rainCard.classList.add('selected')
  rainAudio.play()
})

coffeeCard.addEventListener('click', () => {
  sounds.pauseAudio()
  removeSelectedStyle()
  coffeeCard.classList.add('selected')
  coffeeStoreAudio.play()
})

fireplaceCard.addEventListener('click', () => {
  sounds.pauseAudio()
  removeSelectedStyle()
  fireplaceCard.classList.add('selected')
  fireplaceAudio.play()
})

function removeSelectedStyle() {
  forestCard.classList.remove('selected')
  rainCard.classList.remove('selected')
  coffeeCard.classList.remove('selected')
  fireplaceCard.classList.remove('selected')
}

