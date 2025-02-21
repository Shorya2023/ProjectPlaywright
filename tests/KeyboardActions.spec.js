import { test, expect } from "@playwright/test";


test("Keyboard", async ({page})=>{
    const appurl= "https://www.diffchecker.com/"

    await page.goto(appurl);
    await page.waitForTimeout(5000);
    
     const text1 = await page.locator("//div[@aria-label='Original text input']");
     const text2 = await page.locator("//div[@aria-label='Changed text input']");

       await  text1.fill("AM AN INDIN N INDIA")
       await page.keyboard.press('Control+A');
       await page.waitForTimeout(2000);

       await page.keyboard.press('Control+C');

       await page.waitForTimeout(2000);

       //tab
       await page.keyboard.down("Tab");
       await page.keyboard.up("Tab");

       //tab
       await page.keyboard.down("Tab");
       await page.keyboard.up("Tab");

       await page.keyboard.press("Control+V");

       await page.waitForTimeout(5000);









})