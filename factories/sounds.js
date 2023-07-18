export default function Sounds({
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
}) {

  function pauseAudio(audio1, audio2, audio3) {
    audio1 = audio1 === undefined ? null : audio1.pause()
    audio2 = audio2 === undefined ? null : audio2.pause()
    audio3 = audio3 === undefined ? null : audio3.pause()
  }

  return {
    pauseAudio
  }
}