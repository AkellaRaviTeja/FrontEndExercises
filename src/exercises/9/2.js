const puppeteer = require('puppeteer');
const { slow, delay } = require('./utils/utils');

const delayInterval = 1000;

(async () => {
    puppeteer.launch({ headless: false }).then(async (browser) => {
        await browser.newPage()
            .then(async (page) => {
                page.on('dialog', async dialog => {
                    await delay(delayInterval);
                    await dialog.accept();
                });
                page.goto('C:/Users/USER/Documents/apxor/apps/FrontEndExercises/src/exercises/2/insert.html');
                const id = await page.waitForSelector('input[name=id]');
                await id.type('1255', slow);
                await delay(delayInterval);
                const name = await page.waitForSelector('input[name=name]')
                await name.type('Raziq', slow);
                await delay(delayInterval);
                const doj = await page.waitForSelector('input[name=doj]')
                await doj.type('01-01-2002', slow);
                await delay(delayInterval);
                const experience = await page.waitForSelector('input[name=experience]')
                await experience.type('1', slow);
                await delay(delayInterval);
                const button = await page.waitForSelector('input[type=submit]')
                await button.click(slow);
                await page.waitForNavigation({ waitUntil: 'domcontentloaded' }, slow)
                await delay(delayInterval);
                browser.newPage().then(async (page) => {
                    page.goto('C:/Users/USER/Documents/apxor/apps/FrontEndExercises/src/exercises/2/2.html');
                    await delay(delayInterval);
                    const id1 = await page.waitForSelector('input[name=id]');
                    await id1.type('1255', slow);
                    await delay(delayInterval);
                    const button1 = await page.waitForSelector('.btn-submit', slow);
                    button1.click(slow);
                    await delay(delayInterval); 
                    browser.close();
                })
            })
    })
})()

