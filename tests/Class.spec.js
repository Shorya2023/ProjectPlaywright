import {test, expect} from '@playwright/test'

test("Locators", async({page})=>{

    await page.goto("https://practice.expandtesting.com/")
    const list  = await page.$$(".card-title a");
    console.log(list.length);
    for(let a of list)
    {
        console.log("values are-"+await a.textContent());
        
    }
    // // await page.locator(".col-md-3",{hasText:"Dynamic Table"}).click();
    // await expect(page.locator(".card-body",{hasText: 'Shadow DOM'})).toBeVisible()
    // await page.locator(".card-body",{hasText: 'Shadow DOM'}).click();
    // await page.locator(".col-md-9 button",{hasText: 'This button is inside a Shadow DOM.'}).click();


    // await expect(page.locator(".card-body",{hasText: 'Disappearing Elements'})).toBeVisible()
    // await page.locator(".card-body",{hasText: 'Disappearing Elements'}).click();
    // const val = await page.locator("div> button:nth-child(1) span").textContent();
    // console.log(val);
    
    
    // await expect(page.locator(".card-body",{hasText: 'Dynamic Controls'})).toBeVisible()
    // await page.locator(".card-body",{hasText: 'Dynamic Controls'}).click();
    // const val = await page.locator("#checkbox-example> button").textContent();
    // console.log(val);
    
    
    await expect(page.locator(".card-body",{hasText: 'Challenging DOM'})).toBeVisible()
    await page.locator(".card-body",{hasText: 'Challenging DOM'}).click();
    await page.waitForSelector("table tr",{timeout:12000});
    const Rows =  page.locator("table tr");
    console.log(await Rows.count());
       const TotalowsCount = await Rows.count();
    for (let i=1;i<=TotalowsCount;i++)
    {
         console.log("Rows value"+await Rows.nth(i).locator("td").textContent());
        const sText =  await(Rows.nth(i).locator("td")).innerText()

         
        if(sText.includes("Definiebas7"))
        {
            await Rows.nth(i).locator('link',{hasText:"Delete"}).click();
            console.log("Deleted..............");
            
        }
    }


    
    
    //se get by loctor uually for form fields
   
    // await page.goto("https://qa-automation-practice.netlify.app/checkboxes")
    // await page.locator("#checkbox1").check({timeout:10000})





})