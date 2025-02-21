import { test, expect } from "@playwright/test";

test("radio_button", async ({page})=>
{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

            const pgTitle = await page.title();
            console.log("page title is ", pgTitle);

            await page.locator("//input[@id='gender']").check();
            await expect.soft(await page.locator("//input[@id='gender']")).toBeChecked();

           await expect.soft(await page.locator("//input[@id='gender']").isChecked()).toBeTruthy();

           await page.locator("//input[@type='radio'])[2]").check();
           await expect.soft(await page.locator("//input[@type='radio'])[2]").isChecked()).toBeTruthy();


})