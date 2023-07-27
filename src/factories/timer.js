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

      updateCountdownDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }

  function updateCountdownDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function getMinutes() {
    return minutes
  }

  function setMinutes() {
    minutes = Time.minutes
  }

  function addMinutes() {
    minutes += 5
    Time.minutes += 5
  }

  function removeMinutes() {
    minutes -= 5
    Time.minutes -= 5
  }

  function getSeconds() {
    return seconds
  }

  function setSeconds() {
    seconds = Time.seconds
  }

  function totalSecondsCountdown() {
    return getMinutes() * 60 + getSeconds()
  }

  return {
    countdown,
    updateCountdownDisplay,
    getMinutes,
    getSeconds,
    addMinutes,
    removeMinutes,
    totalSecondsCountdown,
    setMinutes,
    setSeconds,
  }
}