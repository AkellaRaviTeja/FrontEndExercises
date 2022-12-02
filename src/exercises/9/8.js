const puppeteer = require('puppeteer');
const { delay } = require('./utils/utils');

(async () => {
    puppeteer.launch({ headless: false }).then(async (browser) => {
        await browser.newPage()
            .then(async (page) => {
                page.goto('C:/Users/USER/Documents/apxor/apps/FrontEndExercises/src/exercises/8/8.html').then(async () => {
                    await delay(1000);
                    await (await page.$('.tooltip')).hover()
                    await delay(2500);
                    browser.close();
                });
            })
    })
})()

