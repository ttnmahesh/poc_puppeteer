import LoginPage from "../pages/LoginPage"
import GetXpath from "../pages/GetXpath";
import BasePage from "../pages/BasePage";
import { expect, jest, test } from '@jest/globals';

import { username, password, jestTimeOut } from "../config";

describe('Verify Login Functionality with Valid and Invalid Credentials', () => {

    let DashboardHeading = 'Prism Core Platform'
    let loginErrMsg = 'Invalid username or password'
    let loginpage
    let getexpath
    let basepage


    beforeAll(async () => {
        loginpage = new LoginPage
        getexpath = new GetXpath
        basepage = new BasePage
    })

    test('Verify login Functionality with Invalid Credentials', async () => {
        await loginpage.visit()
        await loginpage.navigateOnLoginPage()
        await loginpage.login("username", "password")
        const Invalidalext = await loginpage.getLoginErrorMsg()
        console.log('validText is ', Invalidalext)
        expect(Invalidalext).toBe(loginErrMsg)
    }, jestTimeOut)

    test('Verify login Functionality with Valid Credentials', async () => {
        await loginpage.visit()
        await loginpage.navigateOnLoginPage()
        await loginpage.login(username, password)
        const validText = await loginpage.getValidationText()
        //console.log('validText is ', validText)
        expect(validText).toBe(DashboardHeading)
    }, jestTimeOut)

    test('verify link is openeing or not in new tab', async () => {
        const text = await loginpage.performswtich()
        console.log('TEXT ON NEW WINDOW  ---  ', text)
        expect(text).toEqual('Chrome vs Chromium: Core Differences')
        await page.click(".btn-primary.btn-lg.col-md-3.custom-btn-amp-events")
        await page.waitForTimeout(6000)
    }, 15000)

    test('Retrive all text heading after login successfull', async () => {
        await page.goto("https://www.saucedemo.com/")
        await page.type("#user-name", "standard_user")
        await page.type("#password", "secret_sauce")
        await page.click("#login-button")
        await page.waitForSelector(".inventory_item_name")
        await page.waitForTimeout(3000)
        console.log(await basepage.expectedName())
    }, 15000)

    test('Retrive all text heading after login successfull', async () => {
        var array1 = ['$7.9' , '$9.8' , '$11.8', '$12.6'];
        var array2 = ['$7.9' , '$9.8' , '$11.8', '$12.6'];
        var is_same = (array1.length == array2.length) && array1.every(function (element, index) {
            return element === array2[index];
        });
        console.log('WHAT IS SAME  -   ', is_same)
    }, 15000)

    test('Take custom Screenshot', async () => {
        await page.goto("https://www.saucedemo.com/")
        // const customArea = await page.waitForSelector(".login_credentials")
        const customArea = await page.$(".login_credentials")
        // await page.waitForTimeout(3000)
        await customArea.screenshot({pah:'customAreaScreenshot.jpg'})
        console.log('heree......................  ', expect.getState().currentTestName)
        console.log(test.status)
    }, 15000)


})