export default function Timer({ Time, minutesDisplay, secondsDisplay }) {

  let minutes
  let seconds

  function countdown() {
    Time.idCountdown = setTimeout(function () {
      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      seconds--

      if (minutes < 0) {
        return
      }

      minutesDisplay.textContent = String(minutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds).padStart(2, '0')
      countdown()
    }, 1000)
  }

  function resetDefaultCountdown() {
    minutesDisplay.textContent = String(Time.minutes).padStart(2, '0')
    secondsDisplay.textContent = String(Time.seconds).padStart(2, '0')
  }

  return {
    countdown,
    resetDefaultCountdown
  }
}