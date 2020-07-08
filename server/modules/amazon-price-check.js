const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

//const url = 'https://www.amazon.com/Celestial-Seasonings-Herbal-Sleepytime-Count/dp/B000E65OF6'

function amazonPriceCheck (url){

    //const url = url;

    async function configureBrowser() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        return page;
    }

    async function checkPrice(page) {
    
        await page.reload();
        let html = await page.evaluate(() => document.body.innerHTML);
        // console.log(html);
    
        $('#priceblock_ourprice', html).each(function () {
            let dollarPrice = $(this).text();
            console.log(dollarPrice);
        })
    
        //priceblock_ourprice
    }
    
    async function monitor() {
        let page = await configureBrowser();
        await checkPrice(page);
    }
    
    monitor();
}
    
module.exports = amazonPriceCheck;