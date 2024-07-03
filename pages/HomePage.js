import BasePage from "./BasePage";

export default class HomePage extends BasePage{
    // methods
    async visit(){
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.waitForSelector('#nav')
    }

    async isNavDisplayed(){
        await page.waitForSelector('#homeMenu')
        await page.waitForSelector('#onlineBankingMenu')
        await page.waitForSelector('#feedback')
        await page.waitForSelector('#pages-nav')
    }

    async clickHomepageLink(){
        await page.click('#homeMenu')
    }

    async clickOnlineBankingLink(){
        await page.click('#onlineBankingMenu')
    }

    async clickFeedbackLink(){
        await page.click('#feedback')
    }
}