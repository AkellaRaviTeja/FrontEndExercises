const puppeteer = require('puppeteer');
const { delay, slow } = require('./utils/utils');

(async () => {
    puppeteer.launch({ headless: false }).then(async (browser) => {
        await browser.newPage()
            .then(async (page) => {
                await page.goto('C:/Users/USER/Documents/apxor/apps/FrontEndExercises/src/exercises/7/7.html');
                await delay(1000);
                await page.evaluate(() => {
                    window.scrollTo(0, 10000);
                })
                await delay(2500)
                browser.close();
            })
    })
})()

