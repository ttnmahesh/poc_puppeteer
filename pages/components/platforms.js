import BasePage from "../BasePage";
import GetXpath from "../GetXpath";

let getXpath = new GetXpath

// Menu Locators
let dashboardProfileIcon = "#accountPageSliderButton"
let menuIcon = "//button[@aria-label='menu']"
let menuCore = "//span[normalize-space()='Core']"
let menuIAM = "//span[normalize-space()='IAM']"
let menuVideo = "//span[normalize-space()='Video']"
let menuData = "//span[normalize-space()='Data']"

// Core platform locators
let coreSubMenuOrganization = "//p[normalize-space()='Organization']"
let coreSubMenuCountry = "//p[normalize-space()='Country']"

// IAM platform locators
let selectOrganization = ":r0:"
let selectOrganizationUnit = "#:r1:"
let subMenuRoleManagement = "//p[normalize-space()='Role Management']"
let subMenuPlatformUsers = "//p[normalize-space()='Platform Users']"

// Video platform locators
let subMenuVideoEncoder = "//a[@href='/video-encoder']"
let subMenuVideoDecoder = "//p[normalize-space()='Video Decoder']"

export default class Platform extends BasePage {
 
    async openCorePlatform() {
        await page.waitForSelector(dashboardProfileIcon)
        await getXpath.click(menuIcon)
        await getXpath.click(menuCore)
        await page.waitForXPath(coreSubMenuOrganization)
        await page.waitForXPath(coreSubMenuCountry)
    }

    async openIamPlatform() {
        await page.waitForSelector(dashboardProfileIcon)
        await getXpath.click(menuIcon)
        await getXpath.click(menuIAM)
        await page.waitForXPath(subMenuRoleManagement)
        await page.waitForXPath(subMenuPlatformUsers)
    }

    async openVideoPlatform() {
        await page.waitForSelector(dashboardProfileIcon)
        await getXpath.click(menuIcon)
        await getXpath.click(menuVideo)
        await page.waitForXPath(subMenuVideoEncoder)
        await page.waitForXPath(subMenuVideoDecoder)
    }

    async openDataPlatform() {
        await page.waitForSelector(dashboardProfileIcon)
        await getXpath.click(menuIcon)
        await getXpath.click(menuData)
    }
}