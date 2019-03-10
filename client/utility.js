// function getRandomInRange (from, to, fixed) {
//    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
// }

function getRandomInRange(x, y) {
  return function() {
    let egg = ['green', 'blue', 'red', 'orange', 'special', 'yellow']
    const eggLocation = []
    while (eggLocation.length < 30) {
      let lat =
        (Math.random() * (x + 0.008 - (x - 0.008)) + (x - 0.008)).toFixed(10) *
        1
      let lng =
        (Math.random() * (y + 0.01 - (y - 0.01)) + (y - 0.01)).toFixed(10) * 1
      let idx = Math.floor(Math.random() * 6)
      console.log('')
      eggLocation.push({
        position: {
          lat,
          lng
        },
        icon: egg[idx]
      })
    }
    return eggLocation
  }
}

function generateRandomNum(choices) {
  const idxArr = []
  const multipleChoice = []
  while (idxArr.length < 4) {
    let num = Math.floor(Math.random() * 4)
    if (idxArr.indexOf(num) === -1) idxArr.push(num)
  }
  for (let i = 0; i < idxArr.length; i++) {
    multipleChoice.push({
      id: i,
      choice: choices[i]
    })
  }
  return multipleChoice
}

function setup() {
  let counter = 0
  noCanvas()
  const timer = select('#timer')
  timer.html(counter)
  function timeIt() {
    counter++
    timer.html(counter)
  }
  setInterval(timeIt, 1000)
}

module.exports = {
  getRandomInRange,
  generateRandomNum
}
