const btnPlay = document.querySelector('#play')
const btnPause = document.querySelector('#pause')
const btnStop = document.querySelector('#stop')
const btnAddMinutes = document.querySelector('#more-minutes')
const btnRemoveMinutes = document.querySelector('#less-minutes')

const Time = {
  minutes: 25,
  seconds: 0,
  idCountdown: null,
}

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const forestCard = document.querySelector('#forest')
const rainCard = document.querySelector('#rain')
const coffeeCard = document.querySelector('#coffee')
const fireplaceCard = document.querySelector('#fireplace')
const forestAudio = new Audio('../assets/audios/Forest.wav')
const rainAudio = new Audio('../assets/audios/Rain.wav')
const coffeeStoreAudio = new Audio('../assets/audios/CoffeeStore.wav')
const fireplaceAudio = new Audio('../assets/audios/Fireplace.wav')

forestAudio.loop = true
rainAudio.loop = true
coffeeStoreAudio.loop = true
fireplaceAudio.loop = true

export {
  btnPlay,
  btnPause,
  btnStop,
  btnAddMinutes,
  btnRemoveMinutes,
  Time,
  minutesDisplay,
  secondsDisplay,
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeStoreAudio,
  fireplaceAudio,
}