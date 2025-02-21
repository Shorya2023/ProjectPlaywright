import{test, expect}  from "@playwright/test"
const App_url="https://www.demoblaze.com/";

test("CounLinks", async ({page})=>{


    await page.goto(App_url);

     //verify Login page displayed
     const pgTitle = await page.title();
     console.log("page title is --->", pgTitle);

     await expect(page).toHaveTitle(pgTitle);

     //click on login link
     await page.click("//a[@id='login2']");

     //enter username to login            
     await page.fill("//input[@id='loginusername']", "GPT123");

     //enter password
     await page.fill("//input[@id='loginpassword']", "Running123");

     //click on login  
     await page.click("//button[@onclick='logIn()']");

       //veify home page login
     const HomePgTitle = await page.title();
     console.log("page title is --->", HomePgTitle);
     await expect(page).toHaveTitle(HomePgTitle);
    
     await page.waitForTimeout(4000);

     const welocme = await page.locator("//a[@id='nameofuser']");
     await expect(welocme).toBeVisible();

     const Links= await page.$$("//a");
     console.log("total number of links on page: ", Links.length);
      //const TotalLinks = await  Links.length-1;
       
        for(const links of Links )
        {
               const linksOnPage =  await links.textContent();
               console.log(linksOnPage);
               
        }
     
        const ProdunctsLinks= await page.$$("//a");

        for (const poductsname of ProdunctsLinks)
        {
               const EachPoductsName= await  poductsname.textContent("//div[@id='tbodyid']//h4//a");
                 console.log("product----->",EachPoductsName);
                 
        }


    })
    