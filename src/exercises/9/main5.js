const puppeteer = require("puppeteer");
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  await page.viewport({
    width: 800,
    height: 800,
  });
  await page.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/5/5.html"
  );
  await delay(2000);
  await browser.close();
})();
