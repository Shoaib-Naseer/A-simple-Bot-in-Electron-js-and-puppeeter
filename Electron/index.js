const btn = document.getElementById('btn');
const { ipcRenderer } = require('electron');

btn.addEventListener('click', function () {
  console.log('Checking click');
  ipcRenderer.send('clicked');
});
