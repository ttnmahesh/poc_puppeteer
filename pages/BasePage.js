import GetXpath from "./GetXpath"

const productName = ".inventory_item_name"
export default class BasePage {
    async wait(time) {
        await page.waitForTimeout(time)
        //console.log('============================ wait - ', time,' ============')
        // return new Promise(function(resolve) { 
        //     setTimeout(resolve, time)
        // });
    }

    async getURL() {
        return await page.url()
    }

    async getTitle() {
        return await page.title()
    }

    async switchToTab() {
        const pageTarget = page.target(); //save this to know that this was the opener
        console.log('page target is = ', pageTarget)
        const newTarget = await browser.waitForTarget(target => target.opener() === pageTarget); //check that you opened this page, rather than just checking the url
        const newPage = await newTarget.page(); //get the page object
        await newPage.waitForSelector("body"); //wait for page to be loaded
        return newPage; //this is the id of new page object of window
    }

    async expectedName(){       
        await page.waitForSelector(productName)
        //const expectedNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket', 'Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)'];
        const actualNames = await page.evaluate(({productName}) => {      
        const elements = document.querySelectorAll(productName);
        return Array.from(elements).map(element => element.textContent);
        },{productName});
        return actualNames       
    }

    async login(username, password) {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await getXpath.type(txtUserName, username)
        await getXpath.type(txtPassword, password)
        await getXpath.click(btnLogin)
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        //    console.log('in login..........')
    }


}