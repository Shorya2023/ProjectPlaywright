import {test, expect } from "@playwright/test";


test("visual verification", async({page})=>{

            await page.goto("https://www.orangehrm.com/",{timeout:15000});
             expect(await page.screenshot()).toMatchSnapshot("Tesst.png")
})