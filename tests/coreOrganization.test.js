import coreOrganizationPage from "../pages/coreOrganizationPage";
import LoginPage from "../pages/LoginPage";

import { username, password, jestTimeOut } from "../config";

describe('Verify Organization Test Cases on Core platform', () => {

    let loginpage
    let coreOrgPage
    beforeAll(async () => {
        loginpage = new LoginPage        
        coreOrgPage = new coreOrganizationPage                
    }, jestTimeOut)

    beforeAll(async () => {
        await loginpage.visit()
        await loginpage.navigateOnLoginPage()
        await loginpage.login(username, password)
    }, jestTimeOut)

    afterEach(async () => {
      //  await loginpage.logOut()
    })

    test('verify Organization Page Displaying or Not', async () => {        
        const lbl = await coreOrgPage.goToOrganizationPage()
        expect(lbl).toContain('Display Inactive Organization')
    }, jestTimeOut)

    test('verify add new Organization funcationality', async () => {
        const succesMsg = await coreOrgPage.addNewOrganization()
        expect(succesMsg).toContain('Organization Successfully Added')
    }, jestTimeOut)

    test('verify search Organization Functionality', async () => {
        const orgName = await coreOrgPage.searchOrganization()
        console.log(orgName, ' nnn')
    }, jestTimeOut)

    test('switch tab', async () => {
        
    }, jestTimeOut)

})