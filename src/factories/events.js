import {
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  groupSoundCards,
  groupSoundCardsButton,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
} from '../modules/elements.js'

export default function Events({
  sounds,
  controls,
  timer,
  nonSelectCards
}) {
  forestCard.addEventListener('click', sounds.playForestAudio)

  rainCard.addEventListener('click', sounds.playRainAudio)

  coffeeCard.addEventListener('click', sounds.playCoffeeStoreAudio)

  fireplaceCard.addEventListener('click', sounds.playFireplaceAudio)

  forestCard.addEventListener('mouseenter', () => {
    nonSelectCards(rainCard, coffeeCard, fireplaceCard, forestCard, '0.8')
  })

  forestCard.addEventListener('mouseleave', () => {
    nonSelectCards(rainCard, coffeeCard, fireplaceCard, forestCard, '1')
  })

  rainCard.addEventListener('mouseleave', () => {
    nonSelectCards(forestCard, coffeeCard, fireplaceCard, rainCard, '1')
  })

  rainCard.addEventListener('mouseenter', () => {
    nonSelectCards(forestCard, coffeeCard, fireplaceCard, rainCard, '0.8')
  })

  coffeeCard.addEventListener('mouseenter', () => {
    nonSelectCards(rainCard, forestCard, fireplaceCard, coffeeCard, '0.8')
  })

  coffeeCard.addEventListener('mouseleave', () => {
    nonSelectCards(rainCard, forestCard, fireplaceCard, coffeeCard, '1')
  })

  fireplaceCard.addEventListener('mouseenter', () => {
    nonSelectCards(rainCard, coffeeCard, forestCard, fireplaceCard, '0.8')
  })

  fireplaceCard.addEventListener('mouseleave', () => {
    nonSelectCards(rainCard, coffeeCard, forestCard, fireplaceCard, '1')
  })

  groupSoundCardsButton.addEventListener('click', () => {
    groupSoundCards.classList.toggle('hide')
  })

  btnPlay.addEventListener('click', () => {
    timer.countdown()
    controls.togglePlayOrPause()
  })

  btnPause.addEventListener('click', () => {
    clearTimeout(Time.idCountdown)
    controls.togglePlayOrPause()
  })

  btnStop.addEventListener('click', () => {
    timer.stop()
  })

  btnAddMinutes.addEventListener('click', () => {
    const totalSeconds = timer.totalSecondsCountdown()

    if (!totalSeconds && (Time.minutes * 60 + Time.seconds <= 3300)) {
      timer.addMinutes()
      timer.updateCountdownDisplay(Time.minutes, Time.seconds)
    } else if (totalSeconds <= 3300) {
      timer.addMinutes()
      timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
    }
  })

  btnRemoveMinutes.addEventListener('click', () => {
    const totalSeconds = timer.totalSecondsCountdown()

    if (!totalSeconds && (Time.minutes * 60 + Time.seconds > 300)) {
      timer.removeMinutes()
      timer.updateCountdownDisplay(Time.minutes, Time.seconds)
    } else if (timer.getMinutes() * 60 + timer.getSeconds() > 300) {
      timer.removeMinutes()
      timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
    }
  })
}