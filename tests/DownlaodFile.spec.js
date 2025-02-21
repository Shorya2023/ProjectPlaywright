import {test,expect} from '@playwright/test'

test ("Download File", async ({page}) =>{

    //    await page.goto("https://demo.automationtesting.in/FileDownload.html");
       await page.goto("https://www.tutorialspoint.com/selenium/practice/upload-download.php");

       const downloadlink  = await page.locator("//a[text()='Download']");

       const downloadpromise = page.waitForEvent('download');
       await downloadlink.click();
       const downloadDone = await downloadpromise;

       await downloadDone.saveAs("./tests/",downloadDone.suggestedFilename());



})