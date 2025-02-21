import {test, expect} from "@playwright/test"

const App_url="https://www.naukri.com/mnjuser/profile";

test("LoginTo_Application", { tag: '@smoke',},async ({page})=>{
        // launch Appication 
        await page.goto(App_url);

        //verify Login page displayed
        const pgTitle = await page.title();
        console.log("page title is ", pgTitle);

        await expect(page).toHaveTitle(pgTitle);


        await page.locator("#usernameField").fill("shorya18");
        await page.locator("#passwordField").fill("shorya18");
        await page.getByRole('button',{name:'Login',exact:true}).click();

        await page.waitForTimeout(6000);


        // //click on login link
        // await page.click("//a[@id='login2']");

        // //enter username to login            
        // await page.fill("//input[@id='loginusername']", "GPT123");

        // //enter password
        // await page.fill("//input[@id='loginpassword']", "Running123");

        // //click on login  
        // await page.click("//button[@onclick='logIn()']");

        //  await page.waitForTimeout(3000);
         
        //  //veify home page login
        // const HomePgTitle = await page.title();
        // await expect(page).toHaveTitle(HomePgTitle);

        // const welocme = await page.locator("//a[@id='nameofuser']");
        // await expect(welocme).toBeVisible();
        // await page.waitForTimeout(3000);

        // await page.close();

})