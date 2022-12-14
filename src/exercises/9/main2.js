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
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/2/2.html"
  );
  await page.type("#Id", "1122");
  await page.click("#submit");
  await delay(2000);
  await page.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/2/page2.html"
  );
  await page.type("#name", "Ravi", { delay: 0 });
  await page.type("#Id", "1122", { delay: 0 });
  await page.type("#DOB", "20/05/2001", { delay: 0 });
  await page.type("#experience", "3", { delay: 0 });
  await page.click("#submit");
  await page.goBack();
  await page.reload();
  await page.type("#Id", "1122");
  await page.click("#submit");
  await delay(2000);
  const page2 = await browser.newPage();
  await page2.goto(
    "C:/Users/user/Documents/FrontEndExercises/src/exercises/2/2.html"
  );
  await page2.type("#Id", "1122");
  await page2.click("#submit");
  await delay(2000);
  //   await browser.close();
  //   await page.waitForFunction('document.querySelector("#output").innerText');
})();
