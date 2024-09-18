let QRCode = require('qrcode')

QRCode.toFile('./qrCode/googleQr.png','http://google.com', function (err, url) {
  console.log(url)
})