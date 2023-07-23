import {
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
} from '../modules/elements.js'

export default function Events({
  sounds,
  controls,
  timer,
}) {
  forestCard.addEventListener('click', sounds.playForestAudio)

  rainCard.addEventListener('click', sounds.playRainAudio)

  coffeeCard.addEventListener('click', sounds.playCoffeeStoreAudio)

  fireplaceCard.addEventListener('click', sounds.playFireplaceAudio)

  btnPlay.addEventListener('click', () => {
    timer.countdown()
    controls.togglePlayOrPause()
  })

  btnPause.addEventListener('click', () => {
    clearTimeout(Time.idCountdown)
    controls.togglePlayOrPause()
  })

  btnStop.addEventListener('click', () => {
    clearTimeout(Time.idCountdown)
    timer.updateCountdownDisplay(Time.minutes, Time.seconds)
    timer.setMinutes()
    timer.setSeconds()

    if (btnPlay.classList.contains('hide')) {
      controls.togglePlayOrPause()
    }
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