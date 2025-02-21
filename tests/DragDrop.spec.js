import {test,expect} from "@playwright/test";

test("DragDrop", async ({page})=>{

    const appurl = "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette"

     await page.goto(appurl);

     const washngton = await page.locator('#box3');
     const copenhgn = await page.locator('#box4')

     const USA = await page.locator('#box103');
     const Denmark = await page.locator('#box104')

     //drag and drop using todrop
     await washngton.dragTo(USA);
     await copenhgn.dragTo(Denmark);

     await page.waitForTimeout(5000);








})

