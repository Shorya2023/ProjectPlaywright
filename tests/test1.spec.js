/**Open https://www.amazon.in/ in Chrome Browser.
Click on Electronics from dropdown menu and type “IPhone 13”//--------
Get All the dropdown suggestions and validate all are related to searched product
Then Type again “IPhone 13 128 GB” variant and Click “iPhone 13 128GB” variant from dropdown Result.
From Results, click on the searched product and validate new tab is opened
Navigate to next tab and click on Visit the Apple Store link appears below Apple iPhone 13 (128 GB) variant
Click on Apple Watch dropdown and select Apple Watch SE (GPS + Cellular)
Hover on watch image and verify Quick Look is displayed for the watch.
Verify newly opened modal is related to Same product for which Quick look is performed.
 
 */

import {expect, test} from '@playwright/test'
 
test("Verify products @Run" ,async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("IPhone 13");
    const allSuggestions = await page.$$("#sac-autocomplete-results-container .s-suggestion-container")
     

       for (let  product of allSuggestions)
       {
              const productText = await product.textContent();
           if (productText.contains("Iphone 13"))
           {
                
                expect(productText).toBeTruthy();
           }
       }

       await page.getByPlaceholder("Search Amazon.in").fill("IPhone 13 128GB");
       const iPhone_13_128GB = await page.$$("#sac-autocomplete-results-container .s-suggestion-container")
     

       for (let  product of iPhone_13_128GB)
       {
        const productText = await product.textContent();
           if (productText=="iPhone 13 128GB")
           {
                 product.click();
                 break;
           }
       }

       const newPageCntext= page.waitForEvent('page')
       await page.locator(".puisg-col-inner h2").first().click();
       const newPage = await newPageCntext();

       expect(newPage.locator("#productTitle")).toBeVisible();


       
       const newApplePage= page.waitForEvent('page')
       await newPage.locator("#bylineInfo").click();
       const newApplPage = await newApplePage();

       

       newApplPage.locator(".Navigation__navList__HrEra li a").filter({hasText: "Apple Watch SE"}).click();
   





})