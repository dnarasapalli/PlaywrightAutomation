const{chromium}=require('@playwright/test');
(async()=>{
    const browser=await chromium.launch();
    const page=await browser.newPage();
    await page.goto('https://softwaretestingmaterials.com');
    const element=await page.locator('//button[text()="Submit"]');
    await element.click();
    await browser.close();

}) ();