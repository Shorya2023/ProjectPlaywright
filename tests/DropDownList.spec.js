import {test,  expect } from "@playwright/test";

test("checkbox_action", async ({page})=>{
    
    const appurl = "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php";
    await  page.goto(appurl);

    await page.locator("//select[@id='state']").scrollIntoViewIfNeeded();// to view the webelement csroll
    await page.locator("//select[@id='state']").selectOption("Haryana"); // select text
    await page.locator("#city").selectOption({label:"Meerut"});// using label
    await page.waitForTimeout(4000);

    await page.selectOption("//select[@id='state']", "Rajasthan");
    await page.selectOption("//select[@id='city']", "Agra");
    await page.waitForTimeout(4000);

    await page.locator("//select[@id='state']").selectOption({value:"Uttar Pradesh"});// using value
    await page.locator("//select[@id='city']").selectOption({value:"Lucknow"});
    await page.waitForTimeout(4000);
    expect(page.locator("//select[@id='city']")).toHaveValues(["Agra","Lucknow","Meerut"]);

    await page.locator("//select[@id='city']").selectOption({index:2});// using index 
    await page.waitForTimeout(4000);

    //total options under state dropdown 
    const allOptions  = await page.$$('#state option');
    const allvaluesarr= await page.locator('#state').textContent();
    console.log("values ALLin arr->", allvaluesarr);
    await expect(allvaluesarr.includes("Haryana")).toBeTruthy();;

       for (let op of allOptions)
       {
            console.log("States-->", await op.textContent());
    
       }
      
    //total options under city dropdown 
    const allOptionsCity  = await page.$$('#city option');
    const allvaluesarr1= await page.locator('#city').textContent();
    console.log("values ALLin arr->", allvaluesarr1);
    await expect(allvaluesarr1.includes("Agra")).toBeTruthy();;


       for (let op1 of allOptionsCity)
       {
            console.log("Cities-->",await op1.textContent());
           
       }


})


