import{test, expect} from "@playwright/test"

   test("Multiselect", async ({page})=>{

            const appurl = "https://www.softwaretestingmaterial.com/sample-webpage-to-automate/"

            await  page.goto(appurl);
            await page.waitForTimeout(9000);

            const pageTitle  = await page.title();
            console.log("pageTitle ", pageTitle);

            const Multiselect = await page.locator("//select[@name='multipleselect[]']");
            await Multiselect.scrollIntoViewIfNeeded();
            console.log(Multiselect.textContent());
            await page.waitForTimeout(4000);


            








   })

