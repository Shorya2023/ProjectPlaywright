import {test, expect } from "@playwright/test";

test("Calender",async ({page})=>{

      const appurl="https://demo.automationtesting.in/Datepicker.html";
      let date="12";
      let month ="December";
      let year ="2025";


      await page.goto(appurl);

      console.log("page title is ", await page.title());

      await page.click('#datepicker1');

      while( true)
            {
              const  currentmonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();
               const currentyear= await page.locator("//span[@class='ui-datepicker-year']").textContent();
                    console.log("cuur year-", currentyear);
                    console.log("current month-", currentmonth);                    
                    
                if (currentmonth==month && currentyear==year)
                {
                        break;
                }
                await page.locator("//a[@title='Next']").click();
          
            }

      await page.click(`//a[@class='ui-state-default'][text()=${date}]`)


      //await page.fill('#datepicker1','10/24/2024');

      await page.waitForTimeout(4000);
      

})