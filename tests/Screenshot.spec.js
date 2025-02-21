import { test, expect } from "@playwright/test";

test("Screesnhot", async ({page})=>{
    const App_url="https://www.demoblaze.com/";

        // launch Appication 
        await page.goto(App_url);

        //verify Login page displayed
        const pgTitle = await page.title();
        console.log("page title is ", pgTitle);

        await page.screenshot({path:"node_modules/Screenshot"+"/"+"Homeppage_"+Date.now()+".png"});

        await page.screenshot({path:"node_modules/Screenshot"+"/"+"Full_Homeppage_"+Date.now()+".png",fullPage:true});

        await page.locator("//div[@class='list-group']")
            .screenshot({path:"node_modules/Screenshot"+"/"+"Categories"+Date.now()+".png",fullPage:true});

         await page.waitForTimeout(5000);







})

