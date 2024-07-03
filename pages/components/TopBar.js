import HomePage from "../HomePage";

export default class TopBar extends HomePage{
    async isTopBarDisplayed(){
        await page.waitForSelector('.brand')
        await page.waitForSelector('#signin_button')
    }

    async clickSignInButton(){
        await page.click('#signin_button')
    }
}