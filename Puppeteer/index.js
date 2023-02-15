const puppeteer = require('puppeteer');
const fs = require('fs/promises');

module.exports = async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://bxtrack.com/');
  await page.screenshot({ path: '../Screenshots/bxtrack.png' });
  await browser.close();
};
