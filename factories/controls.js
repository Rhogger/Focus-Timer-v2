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
    timer.resetDefaultCountdown()

    if (btnPlay.classList.contains('hide')) {
      togglePlayOrPause()
    }
  })

  function togglePlayOrPause() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }
}