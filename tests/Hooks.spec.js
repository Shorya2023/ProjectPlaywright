import { test, expect } from "@playwright/test";

const App_url="https://www.demoblaze.com/";
let page;

//test.beforeEach will get  executed each time before every test
test.beforeEach("LoginToApp", async ({browser})=>{
    console.log(`Running ${test.info().title}`);
    page = await browser.newPage();
    await page.goto(App_url);

    // maximize browser window
   // test.use({viewport:{width:1366,height:641}})

    const pgTitle = await page.title();
    console.log("page title is ", pgTitle);
        //click on login link
        await page.click("//a[@id='login2']");
        //enter username to login            
        await page.fill("//input[@id='loginusername']", "GPT123");
        //enter password
        await page.fill("//input[@id='loginpassword']", "Running123");
        //click on login  
        await page.click("//button[@onclick='logIn()']");
        await page.waitForTimeout(3000);
})

test("verifyHomePagTitle", async()=>{

    const HomePgTitle = await page.title();
    await expect(page).toHaveTitle(HomePgTitle);
    const welcome = await page.locator("//a[@id='nameofuser']");
    await expect(welcome).toBeVisible();
    await page.waitForTimeout(3000);

})

test("PoductCounts", async ()=>{
    const ProdunctsLinks= await page.$$("//a");
    for (const poductsname of ProdunctsLinks)
    {
           const EachPoductsName= await  poductsname.textContent("//div[@id='tbodyid']//h4//a");
            console.log("product----->",EachPoductsName);
             
    }

})


////test.aftereach will get run  each time  After every test

test.afterEach("Logout",async()=>{
        await page.locator('#logout2').click()
        await page.waitForTimeout(2000);
        await page.close();
                
})
