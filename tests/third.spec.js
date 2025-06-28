//const{test,expect}=require('@playwright/test')
import{test,expect} from '@playwright/test';
test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/');
    const pagetitle=await page.title();
    console.log('Page title is:', pagetitle);
    await expect(page).toHaveTitle('STORE');
    const pageurl=await page.url();
    console.log('URL:',pageurl);
    await expect(page).toHaveURL('https://demoblaze.com/');
    await page.close();

})