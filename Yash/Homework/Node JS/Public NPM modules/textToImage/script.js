const textToImage = require('text-to-image');

const dataUri = textToImage.generate('Lorem ipsum dolor sit amet', {
  debug: true,
  Width: 4000,
  fontSize: 18,
  fontFamily: 'Arial',
  lineHeight: 30,
  margin: 5,
  bgColor: 'blue',
  textColor: 'red',
  path:'./textToImage/image.png',
});