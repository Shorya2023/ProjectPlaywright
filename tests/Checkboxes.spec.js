import {test,  expect } from "@playwright/test";

  test("checkbox_action", async ({page})=>{

            const appurl = "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php";
        await  page.goto(appurl);
        //checked gain
        await  page.locator("//input[@id='hobbies']").check();
        await page.waitForTimeout(8000);
        await expect.soft(await page.locator("//input[@id='hobbies']")).toBeChecked();
        await expect.soft(await page.locator("//input[@id='hobbies']").isChecked()).toBeTruthy();
        
        //unchecked 
        if (await page.locator("//input[@id='hobbies']").isChecked())
        {    
            await  page.locator("//input[@id='hobbies']").uncheck();
            await page.waitForTimeout(3000);
        }

        //uncheck
        await  page.getByLabel("Music").check();
        await page.getByLabel("Reading").check();
        await page.waitForTimeout(3000);


  })