import {test, expect} from '@playwright/test'

test("Locators", async({page})=>{

    await page.goto("https://qa-automation-practice.netlify.app/login")
    await page.getByLabel("Email address").fill("heli")

    //se get by loctor uually for form fields
   
    // await page.goto("https://qa-automation-practice.netlify.app/checkboxes")
    // await page.locator("#checkbox1").check({timeout:10000})





})