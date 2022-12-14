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
  await page.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/1/page2.html"
  );
  await page.type("#name", "Ravi", { delay: 0 });
  await page.type("#Id", "1122", { delay: 0 });
  await page.type("#DOB", "20/05/2001", { delay: 0 });
  await page.type("#experience", "3", { delay: 0 });
  await page.click("#submit");
  await page.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/1/1.html"
  );
  await page.type("#Id", "1122");
  await page.click("#submit");
  await delay(3000);
  await browser.close();
  //   await page.waitForFunction('document.querySelector("#output").innerText');
})();
