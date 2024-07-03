import { baseUrl } from "../config";
import BasePage from "./BasePage";
import GetXpath from "./GetXpath";

let getXpath = new GetXpath

// ARANGE (LOCATORS)
const btnShowLoginForm = "//button[normalize-space()='Log in']"
const txtUserName = "//input[@id='Input_Username']"
const txtPassword = "//input[@id='Input_Password']"
const btnLogin = "//button[normalize-space()='login']"
const lblLoginErrMsg = "//li[normalize-space()='Invalid username or password']"
const lblDashboardPageHeading = "//h1[normalize-space()='Prism Core Platform']"

// ACT (ACTIONS)
export default class LoginPage extends BasePage {


    async visit() {
        await page.goto(baseUrl, { "waitUntil": 'networkidle2' })
    }

    async navigateOnLoginPage() {
        await getXpath.click(btnShowLoginForm)
    }

    async login(username, password) {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await getXpath.type(txtUserName, username)
        await getXpath.type(txtPassword, password)
        await getXpath.click(btnLogin)
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        //    console.log('in login..........')
    }

    async getValidationText() {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.waitForSelector('h1')
        const text = await getXpath.getText(lblDashboardPageHeading);
        // await getXpath.type("(//input[@id=':r45:'])[1]", "This is test")
        return text;
    }

    async getLoginErrorMsg() {
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log('login error messgae is -  ', getXpath.getText(lblLoginErrMsg))
        return await getXpath.getText(lblLoginErrMsg)
    }

    async logOut() {
        await page.waitForSelector('#accountPageSliderButton')
        await page.click('#accountPageSliderButton')
        await page.waitForXPath("//div[contains(text(),'Sign Out (full)')]")
        await getXpath.click("//div[contains(text(),'Sign Out (full)')]")
        await page.waitForSelector('h1')
        // await page.goto('https://prism-web.dev.1stbet.com/login')
    }

    async performswtich() {
        await page.goto('https://www.browserstack.com/guide/how-to-start-with-puppeteer-debugging')        
        await page.waitForSelector('h1')        
        const openNewTabLink = "a[title='Difference between Chrome and Chromium']"
        await page.click(openNewTabLink)
        page = await this.switchToTab()
        await page.waitForSelector('h1')
        const newPageText = await getXpath.getText("//h1[normalize-space()='Chrome vs Chromium: Core Differences']")
        return newPageText
    }
}