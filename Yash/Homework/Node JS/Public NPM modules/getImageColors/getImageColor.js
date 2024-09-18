let fs = require('fs')
let buffer = fs.readFileSync(path.join(__dirname, 'double-rainbow.gif'))
let getColors = require('get-image-colors')

getColors(buffer, 'image/gif').then(colors => {
  // `colors` is an array of color objects
  colors.map(color => color.hex())
// => ['#FFFFFF', '#123123', '#F0F0F0']

colors[0].alpha(0.5).css()
// => 'rgb(0,128,128)''
})