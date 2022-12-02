const puppeteer = require('puppeteer');
const { delay } = require('./utils/utils');

(async () => {
    puppeteer.launch({ headless: false }).then(async (browser) => {
        await browser.newPage()
            .then(async (page) => {
                page.goto('C:/Users/USER/Documents/apxor/apps/FrontEndExercises/src/exercises/6/6.html');
                await delay(1000);
                const home = await page.waitForSelector('#home');
                await home.hover();
                await delay(1000);
                const blog = await page.waitForSelector('#blog');
                await blog.hover();
                await delay(1000);
                const about = await page.waitForSelector('#about');
                await about.hover();
                await delay(2500);
                browser.close();
            })
    })
})()

