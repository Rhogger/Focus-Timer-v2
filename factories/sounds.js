export default function Sounds({
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
}) {

  function pauseAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeStoreAudio.pause()
    fireplaceAudio.pause()

    console.log('Pausou');
  }

  return {
    pauseAudio
  }
}