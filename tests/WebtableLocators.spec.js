import {test,expect} from '@playwright/test'

test("Webtable -->", async({page})=>{
        await page.goto("https://cosmocode.io/automation-practice-webtable/");

        await page.waitForTimeout(5000)
        await page.locator("#countries tr").filter({hasText:"Colon"}).locator("td input").click();
        await page.waitForTimeout(3000)

   
})