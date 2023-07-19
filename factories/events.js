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
} from '../modules/elements.js'

export default function Events({
  sounds
}) {


  forestCard.addEventListener('click', sounds.playForestAudio)

  rainCard.addEventListener('click', sounds.playRainAudio)

  coffeeCard.addEventListener('click', sounds.playCoffeeStoreAudio)

  fireplaceCard.addEventListener('click', sounds.playFireplaceAudio)
}