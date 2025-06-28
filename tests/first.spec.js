const{test,expect}=require('@playwright/test')
test("valid login",async function({page},{}){

await page.goto('https://www.softwaretestingmaterial.com')
console.log(await page.title())

})

    