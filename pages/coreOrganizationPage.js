import { Browser } from "puppeteer";
import BasePage from "./BasePage";
import GetXpath from "./GetXpath";

let getXpath = new GetXpath

// organization page locators
let organizationPageHeading = "//h6[normalize-space()='Organization']"
let lblDisplayInactiveOrg = "//span[@class='MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-2mi8b2-MuiTypography-root']"

let subMenuOrganization = "//p[normalize-space()='Organization']"

let btnAddOrg = "//button[@title='Add Organization']"
let lblAddOrg = "//h6[normalize-space()='Add Organization']"
let txtDisplayName = "#Display-Name"
let textShortName = "#Short-Name"
let btnAdd = "//button[normalize-space()='Add']"
let msgConfirmAdd = "//div[@class='MuiAlert-message css-1pxa9xg-MuiAlert-message']"
let searchOrg = "//input[@type='search']"
let lblFirstOrgNameInGrid = "//div[@class='MuiDataGrid-virtualScrollerRenderZone css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone']//div[1]//div[1]//div[1]"

export default class coreOrganizationPage extends BasePage{

    async goToOrganizationPage(){
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await getXpath.click(subMenuOrganization)        
        await page.waitForXPath(organizationPageHeading)
        await page.waitForXPath(lblDisplayInactiveOrg)
        const ltlText = await getXpath.getText(lblDisplayInactiveOrg)
        console.log('IN GO TO SEARCH OERGANIZATION')
        return ltlText       
    }

    async addNewOrganization(){
        await this.goToOrganizationPage()
        //await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.waitForXPath(subMenuOrganization)
        await getXpath.click(subMenuOrganization)
        await page.waitForXPath(btnAddOrg)
        await getXpath.click(btnAddOrg)
        await page.waitForXPath(lblAddOrg)
        await page.type(txtDisplayName, 'Test Organization')
        await page.type(textShortName, 'TORG')
        await getXpath.click(btnAdd)
        await page.waitForXPath(msgConfirmAdd)
        const successMsg = await getXpath.getText(msgConfirmAdd) 
        console.log('IN ADD NEW OERGANIZATION')
        return successMsg        
    }

    async searchOrganization(){
        await this.goToOrganizationPage()
       // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.waitForXPath(searchOrg)
        await getXpath.type(searchOrg, 'Test Organization')
        await page.waitForXPath(lblFirstOrgNameInGrid)
        const orgName = await getXpath.getText(lblFirstOrgNameInGrid)
        console.log('IN-SEARCH OERGANIZATION')
        return orgName
    }  
    
    async getOrganization(){
        await this.goToOrganizationPage()
        await page.waitForNavigation()
        await page.waitForXPath(textShortName)
        await expect(lblAddOrg).toBe('200')
    }
}