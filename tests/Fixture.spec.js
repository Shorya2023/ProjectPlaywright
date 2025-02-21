import {test} from '@playwright/test'


test("Fixtures",async ({browser})=>{
    let context =await  browser.newContext();
    let page = await  context.newPage();
    await page.goto("https://automationexercise.com/")
    await page.close();
})