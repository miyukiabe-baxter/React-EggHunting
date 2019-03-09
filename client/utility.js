// function getRandomInRange (from, to, fixed) {
//    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
// }

function getRandomInRange(x, y) {
  return function(from, to, fixed) {
    let egg = ['green', 'blue', 'red', 'orange', 'special', 'yellow']
    const eggLocation = []
    while (eggLocation.length < 30) {
      let lat =
        (Math.random() * (x + 0.01 - (x - 0.01)) + (x + 0.01)).toFixed(10) * 1
      let lng =
        (Math.random() * (y + 0.01 - (y - 0.01)) + (y + 0.01)).toFixed(10) * 1
      let idx = Math.floor(Math.random() * 6)
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

module.exports = {
  getRandomInRange,
  generateRandomNum
}
