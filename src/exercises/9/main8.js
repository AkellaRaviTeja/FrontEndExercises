const puppeteer = require("puppeteer");
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
  });
  // await delay(500);
  const page = await browser.newPage();
  // await delay(1000);
  await page.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/8/8.html"
  );

  // await delay(1000);
  await page.hover(".main");
  //   browser.waitForTarget(() => false);

  await delay(2000);
  browser.close();
})();
