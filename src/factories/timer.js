export default function Timer({
  Time,
  minutesDisplay,
  secondsDisplay,
  controls,
  btnPlay
}) {

  let minutes
  let seconds

  function countdown() {
    Time.idCountdown = setTimeout(function () {
      minutes = Number(minutesDisplay.textContent)
      seconds = Number(secondsDisplay.textContent)

      const timeOver = minutes === 0 && seconds === 0

      if (timeOver) {
        stop()
        return
      }

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

  function stop() {
    console.log('Terminou');
    clearTimeout(Time.idCountdown)
    updateCountdownDisplay(Time.minutes, Time.seconds)
    setMinutes()
    setSeconds()

    if (btnPlay.classList.contains('hide')) {
      controls.togglePlayOrPause()
    }
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
    stop,
  }
}