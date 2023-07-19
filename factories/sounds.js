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

    isSelected(forestCard, forestAudio)
  }

  function playRainAudio() {
    removeSelectedStyle(forestCard, coffeeCard, fireplaceCard)
    pauseAudio(forestAudio, coffeeStoreAudio, fireplaceAudio)

    isSelected(rainCard, rainAudio)
  }

  function playCoffeeStoreAudio() {
    removeSelectedStyle(forestCard, rainCard, fireplaceCard)
    pauseAudio(forestAudio, rainAudio, fireplaceAudio)

    isSelected(coffeeCard, coffeeStoreAudio)
  }

  function playFireplaceAudio() {
    removeSelectedStyle(forestCard, rainCard, coffeeCard)
    pauseAudio(forestAudio, coffeeStoreAudio, rainAudio)

    isSelected(fireplaceCard, fireplaceAudio)
  }

  function pauseAudio(audio1, audio2, audio3) {
    audio1 = audio1 === undefined ? null : audio1.pause()
    audio2 = audio2 === undefined ? null : audio2.pause()
    audio3 = audio3 === undefined ? null : audio3.pause()
  }

  function isSelected(card, audio) {
    if (!card.classList.contains('selected')) {
      card.classList.add('selected')
      audio.play()
    } else {
      removeSelectedStyle(card)
      pauseAudio(audio)
    }
  }

  return {
    playForestAudio,
    playRainAudio,
    playCoffeeStoreAudio,
    playFireplaceAudio
  }
}