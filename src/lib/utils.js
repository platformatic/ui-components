'use strict'

function getColor (type, color) {
  let convertedColor
  switch (color) {
    case 'green':
      convertedColor = 'main-green'
      break
    case 'red':
      convertedColor = 'error-red'
      break
    default:
      convertedColor = 'main-green'
      break
  }
  return `${type}-${convertedColor}`
}
export {
  getColor
}
