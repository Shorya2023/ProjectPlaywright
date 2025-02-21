import{test, expect} from "@playwright/test";
    
    test("LoginPage_Validation", async({page})=>{
            const App_url="https://parabank.parasoft.com/parabank/index.htm";
            await page.goto(App_url);

            const pageTitle  = await page.title();
            console.log("page title is ", pageTitle);

            await expect(page).toHaveTitle(pageTitle);
            

})