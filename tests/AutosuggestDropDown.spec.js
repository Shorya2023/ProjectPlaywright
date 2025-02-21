import { test, expect } from "@playwright/test";

test("AutoSuggest", async ({page})=>
{
         const appurl  = "https://www.redbus.in/"
         await page.goto(appurl);
         await page.waitForTimeout(2000);
         console.log("page dispayed with tile", page.title());

         await page.fill("//input[@id='src']", "Delhi");
         await page.waitForTimeout(1000);
         await page.waitForSelector("//ul[@class='sc-dnqmqq dZhbJF']/li");

        //  const Values = await page.$$("//ul[@class='sc-dnqmqq dZhbJF']/li/div/text[1]");
         const Values = await page.$$(".sc-dnqmqq li");


          for (let v of Values)
          {
                const text = await v.textContent();
                console.log(text);  
                if (text.includes("Rohini")) 
                    {
                        await v.click();
                    } 
          }


                await page.waitForTimeout(3000);
         


})