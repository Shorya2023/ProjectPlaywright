import{test, expect} from "@playwright/test"

test("Verification_Element",async ({page})=>{

    const App_url="https://practice.expandtesting.com/radio-buttons";
        await page.goto(App_url);

        //verify correct URL
         await expect(page).toHaveURL(App_url);

         const pagetitle = await page.title()
         console.log("pagetitle--",pagetitle);

         //veify checkbox enables 
         const radio= await page.locator("//input[@id='tennis']"); 
         if (await expect(radio).toBeEnabled());
        {  
            await radio.scrollIntoViewIfNeeded();
            await radio.click();
            await page.waitForTimeout(2000); 
        }

        const valueradio = await radio.allInnerTexts();
        console.log("value is ",valueradio);

        //verify chekcbox checked
        await expect(radio).toBeChecked();

        //foottextValue = await  .textContent();
        await expect(await page.locator("//label[@for='football']")).toHaveText("Football");

        await expect(await page.locator("//label[@for='football']")).toContainText("ball");
        await page.waitForTimeout(2000); 

        page.close();


           
});