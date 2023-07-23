export default function Controls({
  btnPlay,
  btnPause,
}) {

  function togglePlayOrPause() {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }

  return {
    togglePlayOrPause
  }
}