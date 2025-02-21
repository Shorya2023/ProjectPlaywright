import { test, expect } from "@playwright/test";


test("Keyboard", async ({page})=>{
    const appurl= "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php"

    await page.goto(appurl);
    await page.waitForTimeout(9000);
    
     const text1 = await page.locator("#name");
     const text2 = await page.locator("#email");

     await text1.fill("hello my name is john!");
     await text1.press("Control+A");
     await text1.press("Control+X");
     await text2.press("Control+V");
     await text2.press("Backspace");

    await page.waitForTimeout(5000);


})