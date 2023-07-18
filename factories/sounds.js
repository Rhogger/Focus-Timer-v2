export default function Sounds({
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
  removeSelectedStyle
}) {

  function playForestAudio() {
    removeSelectedStyle(rainCard, coffeeCard, fireplaceCard)
    pauseAudio(rainAudio, coffeeStoreAudio, fireplaceAudio)

    if (!forestCard.classList.contains('selected')) {
      forestCard.classList.add('selected')
      forestAudio.play()
    } else {
      removeSelectedStyle(forestCard)
      pauseAudio(forestAudio)
    }
  }

  function playRainAudio() {
    removeSelectedStyle(forestCard, coffeeCard, fireplaceCard)
    pauseAudio(forestAudio, coffeeStoreAudio, fireplaceAudio)

    if (!rainCard.classList.contains('selected')) {
      rainCard.classList.add('selected')
      rainAudio.play()
    } else {
      removeSelectedStyle(rainCard)
      pauseAudio(rainAudio)
    }
  }

  function playCoffeeStoreAudio() {
    removeSelectedStyle(forestCard, rainCard, fireplaceCard)
    pauseAudio(forestAudio, rainAudio, fireplaceAudio)

    if (!coffeeCard.classList.contains('selected')) {
      coffeeCard.classList.add('selected')
      coffeeStoreAudio.play()
    } else {
      removeSelectedStyle(coffeeCard)
      pauseAudio(coffeeStoreAudio)
    }
  }

  function playFireplaceAudio() {
    removeSelectedStyle(forestCard, rainCard, coffeeCard)
    pauseAudio(forestAudio, coffeeStoreAudio, rainAudio)

    if (!fireplaceCard.classList.contains('selected')) {
      fireplaceCard.classList.add('selected')
      fireplaceAudio.play()
    } else {
      removeSelectedStyle(fireplaceCard)
      pauseAudio(fireplaceAudio)
    }
  }

  function pauseAudio(audio1, audio2, audio3) {
    audio1 = audio1 === undefined ? null : audio1.pause()
    audio2 = audio2 === undefined ? null : audio2.pause()
    audio3 = audio3 === undefined ? null : audio3.pause()
  }

  return {
    playForestAudio,
    playRainAudio,
    playCoffeeStoreAudio,
    playFireplaceAudio,
    pauseAudio
  }
}