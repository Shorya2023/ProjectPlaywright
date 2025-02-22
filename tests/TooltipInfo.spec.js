import {test,expect} from '@playwright/test'

test("too tip veriication ", async({page})=>{

   await page.goto("https://jqueryui.com/tooltip/");
   await page.locator("#age").hover();
   const value  = page.locator("#age").getAttribute('title')
   console.log(value);
   
   expect(value).toBe('We ask for your age only for statistical purposes.');
    

})

