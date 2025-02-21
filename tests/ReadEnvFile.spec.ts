import {test,expect} from '@playwright/test'
test.describe.configure({mode:'default'})
test("Read env file", async({page})=>{

    console.log("TC001..........EXECUTED");
    await page.goto(`${process.env.url}`)
    console.log(await page.title());
    
})
