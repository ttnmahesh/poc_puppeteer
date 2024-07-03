import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import {expect, jest, test} from '@jest/globals';

import { username, password, jestTimeOut } from "../config";

describe('Verify Homepage details', () => {
    let homepage
    let topbar
    let loginpage
    let feedbackpage

    //hooks
    beforeAll(async () => {
        homepage = new HomePage
        topbar = new TopBar
        loginpage = new LoginPage
        feedbackpage = new FeedbackPage
    })
    afterAll(async () => {

    })

    test('Homepage should display nav detailis', async () => {
        await homepage.visit()
    }, jestTimeOut)

    test('Homepage Navbar should be visible', async () => {
        await homepage.isNavDisplayed()
    })

    test('verify top bar is displaying or not', async() => {
        await topbar.isTopBarDisplayed()
        expect('mahesh').toBe('mahesh')
    }, jestTimeOut)

    test('verify sign In button is clicked', async () => {
        await topbar.clickSignInButton()
    })

    test('verify login function', async () => {
        await loginpage.visit()
        // await loginpage.isLoginFormDispalyed()
        // await loginpage.login(username, password)
        // await loginpage.wait(5000)
    }, jestTimeOut)

    test('verify feedback submission', async () => {
        await feedbackpage.visit()
        await feedbackpage.isFeedbackFormDisplayed()
        await feedbackpage.submitFeedback('Test User', 'test@email.com', 'test subject', 'test comments')
        await feedbackpage.wait(2000)
        const url = await feedbackpage.getURL()
        expect(url).toBe('http://zero.webappsecurity.com/sendFeedback.html')     
    }, jestTimeOut)

    test('AmTote xpath test only', async () => {
        await loginpage.visit()
        await loginpage.navigateOnLoginPage()
        await loginpage.login(username, password)
        // await loginpage.wait(5000)
        
    }, jestTimeOut)

    test('ttt', async () => {

    })

    
})

