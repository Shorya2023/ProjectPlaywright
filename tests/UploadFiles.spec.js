import {test, expect } from "@playwright/test";

test("Uplodfiles",async({page})=>{

        const appurl="https://practice.expandtesting.com/upload";

        await page.goto(appurl);

        await page.locator('#fileInput').setInputFiles("C:/Users/lenovo/Downloads/Nothingh.txt");

        await page.locator("#fileSubmit").click();

        await page.waitForTimeout(4000);

        //remove uploaded files
       // await page.locator('#fileInput').setInputFiles([]);

        await page.waitForTimeout(2000);


})