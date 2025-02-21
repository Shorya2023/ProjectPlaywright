import {test, expect} from "@playwright/test";


test("SoftAssertions", async ({page})=>
{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

    const pgTitle = await page.title();

    await expect.soft(page).toHaveTitle(pgTitle);

    await expect.soft(await page.locator("//input[@id='name']")).toBeEnabled();

    await expect.soft(await page.locator("//input[@id='hobbies']")).toBeEnabled();

    console.log("page title is --."+ pgTitle);
    
})

