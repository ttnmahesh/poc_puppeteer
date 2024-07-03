export default class GetXpath {

    async type(locator, text) {        
        const [typeText] = await page.$x(locator);
        await typeText.type(text);
      //  console.log('IN TPYPE ...')
    }

    async click(locator) {
        const [btn] = await page.$x(locator)
        await btn.click();
    }

    async getText(locator) {        
        const [getElement] = await page.$x(locator);
        let text = await page.evaluate(el => el.textContent, getElement);
       // console.log('TEXT IS - ', text)
        return text;
    }

    async takeScreenshot(page, path, type){
        await page.screenshot({
            path: path,
            fullPage: type
        })
    }

}