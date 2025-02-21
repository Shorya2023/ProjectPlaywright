import { test, expect } from "@playwright/test";

//to maximize the window using viewport
test.use({viewport:{width:1366,height:641}})
test("hover", async ({page})=>{

        const appurl="https://demo.automationtesting.in/Datepicker.html";

          await page.goto(appurl);

          const lnk= await page.locator("//ul[@class='nav navbar-nav']//a[contains(text(),'Interactions ')]");
          const sblink = await page.locator("//a[normalize-space()='Drag and Drop']");
          const   ele = await page.locator("//a[normalize-space()='Dynamic']");     

          await lnk.hover();
          await sblink.hover();
          await ele.click();

            await page.waitForTimeout(5000);






})