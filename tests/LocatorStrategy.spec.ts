import {test,expect} from '@playwright/test'

test("Webtable -->", async({page})=>{
        await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

        await page.getByRole('checkbox',{name:'Check me out - 1'}).check();       
})