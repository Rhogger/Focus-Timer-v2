export default function Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  timer,
}) {

  btnPlay.addEventListener('click', () => {
    timer.countdown()
    togglePlayOrPause()
  })

  btnPause.addEventListener('click', () => {
    clearTimeout(Time.idCountdown)
    togglePlayOrPause()
  })

  btnStop.addEventListener('click', () => {
    clearTimeout(Time.idCountdown)
    timer.updateCountdownDisplay(Time.minutes, Time.seconds)

    if (btnPlay.classList.contains('hide')) {
      togglePlayOrPause()
    }
  })

  btnAddMinutes.addEventListener('click', () => {
    // if(isPaused()){
    //TODO: Arrumar bug de que se eu nao startei o countdown, nao consigo puxar os valores de minutes e seconds, ou seja, preciso puxar de Time
    console.log(timer.getMinutes() * 60 + timer.getSeconds());
    if (timer.getMinutes() * 60 + timer.getSeconds() <= 3300) {
      timer.addMinutes()
      timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
    }
    // }
  })

  btnRemoveMinutes.addEventListener('click', () => {
    if (timer.getMinutes() * 60 + timer.getSeconds() >= 300) {
      timer.removeMinutes()
      timer.updateCountdownDisplay(timer.getMinutes(), timer.getSeconds())
    }
  })

  function togglePlayOrPause() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }

  function isPaused() {
    return !btnPause.classList.contains('hide')
  }
}