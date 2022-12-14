const puppeteer = require("puppeteer");
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  page.goto("C:/Users/user/Documents/FrontEndExercises/src/exercises/6/6.html");
  await delay(2000);
  await page.hover("#home");
  await delay(1000);
  await page.hover("#blog");
  await delay(1000);
  await browser.close();
})();
