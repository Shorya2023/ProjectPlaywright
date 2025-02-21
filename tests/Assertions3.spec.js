import{test, expect} from "@playwright/test"

test("Verification_Element",async ({page})=>{

    const App_url="https://practice.expandtesting.com/inputs";
        await page.goto(App_url);

        //verify correct URL
         await expect(page).toHaveURL(App_url);

         const pagetitle = await page.title()
         console.log("pagetitle--",pagetitle);

         const  Input_value= "shorya";
         //veify input field enables 
         const textInput= await page.locator("//input[@id='input-text']"); 
         if (await expect(textInput).toBeEnabled());  
        {
            await textInput.scrollIntoViewIfNeeded();
             await textInput.fill(Input_value);
             await page.waitForTimeout(5000);
        }

         await expect(textInput).toHaveValue(Input_value);
         const actualValue =    await textInput.textContent();
         if(actualValue==Input_value)
           {
            console.log("value is expected", Input_value);
            
           }
           else{
            console.log("wrong value", actualValue);
            
           }
});