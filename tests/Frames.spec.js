import { test , expect } from "@playwright/test";


test("Frames", async ({page})=>{

    const appurl = "https://ui.vision/demo/webtest/frames/";

    await page.goto(appurl);

    const TotalFrames = await page.frames();
    console.log("total frames in this page--", TotalFrames.length);

  //  const frame2= page.frame('name');  //if frame has a name else use url that is src
    const Frame2 =  await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"});
    await Frame2.fill("//input[@name='mytext2']","Frame2");

    await page.waitForTimeout(1000);


    //method 2
    const Frame3_inputbox = await page.frameLocator("//frame[@src='frame_3.html']").locator("//input[@name='mytext3']");
    await Frame3_inputbox.fill("frame3");
    
    await page.waitForTimeout(4000);








})