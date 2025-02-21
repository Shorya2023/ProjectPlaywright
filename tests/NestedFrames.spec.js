import {test, expect } from "@playwright/test";

test("nestedFrames", async ({page})=>{

    const appurl = "https://ui.vision/demo/webtest/frames/";
    await page.goto(appurl);

    const Frame =  await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    const Totalchildframes = await Frame.childFrames();
    console.log("Totalchildframes ",Totalchildframes.length);

    await Totalchildframes[0].locator("//div[@id='i19']").check();

    await page.waitForTimeout(2000);
    






})