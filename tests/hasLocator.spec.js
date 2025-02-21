import {test,  expect } from "@playwright/test";

test("checkbox_action", async ({page})=>{
    
    const appurl = "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php";
    await  page.goto(appurl);


    const link = await page.locator('//button', {hasText: 'Widgets'});
    await link.click();

    await page.waitForTimeout(5000);

    // const mob = page.locator('form#practiceForm').locator('input', {has:page.locator('input#name')});
    // await mob.fill('john');

});


