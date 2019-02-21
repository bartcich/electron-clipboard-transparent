const electron = require('electron');
const path = require('path');

const copyButton = document.getElementById('copy')
const pasteButton = document.getElementById('paste')
const domImg = document.getElementById('pasted-img')

copyButton.addEventListener('click', function() {
  const imagePath = path.resolve(electron.remote.app.getAppPath() + '/../../../../../image.png');
  electron.remote.clipboard.writeImage(imagePath, 'png');
})

pasteButton.addEventListener('click', function() {
  const image = electron.remote.clipboard.readImage();
  domImg.src = image.toDataURL();
})