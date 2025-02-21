 import{test,expect} from '@playwright/test'

 test("Dialog handler", async({page})=>{
 await page.goto("https://www.selenium.dev/selenium/web/alerts.html#");

   page.on('dialog', async dialog => { console.log("ALERT********"+dialog.message()); 
    if (dialog.type() === 'alert') 
        { await dialog.accept(); } 
      else { await dialog.dismiss(); } });
      await page.locator("#prompt").click()
        // await page.locator(".col-md-8").getByRole('button',{name:"Click Me"}).nth(2).click();
        // await page.waitForTimeout(6000);

 });
