import {test,expect} from '@playwright/test'

test("too tip veriication ", async({page})=>{

   await page.goto("https://jqueryui.com/tooltip/");
   await page.locator("#age").hover();
   const value  = page.locator("#age").getAttribute('title')

   console.log("code has been added to from b1");
   console.log("main has been updted");
   console.log("main has been updted again");


})

