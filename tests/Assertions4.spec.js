import{test, expect} from "@playwright/test"

test("Verification_Element",async ({page})=>{

     const App_url="https://practice.expandtesting.com/dropdown";
     await page.goto(App_url);

        //verify correct URL
         await expect(page).toHaveURL(App_url);

         const pagetitle = await page.title()
         console.log("pagetitle--",pagetitle);

         //veify input field enables 
         const drpdown= await page.$$("//select[@id='country']//option"); 
         const drpdownvalues= await page.locator("//select[@id='country']//option").all();
         console.log("values----->"+drpdownvalues);
          
         console.log("total countries-", drpdown.length);
        //  await expect(drpdown).toHaveCount(252);  

            for (let c of drpdown)
            {
                 const countries = await c.textContent("//select[@id='country']//option//following::option");
                console.log(countries);
                
            }

           
});