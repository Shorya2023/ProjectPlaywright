import{test, expect} from "@playwright/test"

test("Verification_Element",async ({page})=>{

    const App_url="https://www.demoblaze.com/";
        await page.goto(App_url);

        //verify correct URL
         await expect(page).toHaveURL(App_url);

         const pagetitle = await page.title()
         console.log("pagetitle--",pagetitle);
         
        //verify page title
        await expect(page).toHaveTitle(pagetitle);

        const locatorImg= await page.locator("//a[@id='nava']");
        
        //verify   element visible
        await expect(locatorImg).toBeVisible({timeout:2000});



});