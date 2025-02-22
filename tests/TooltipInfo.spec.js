import {test,expect} from '@playwright/test'

test("too tip veriication ", async({page})=>{

   await page.goto("https://jqueryui.com/tooltip/");
   await page.locator("#age").hover();
   const value  = page.locator("#age").getAttribute('title')
<<<<<<< HEAD

=======
   console.log(value);
>>>>>>> 8b51e4830475377cf2771b702337021205ba8523
   
   expect(value).toBe('We ask for your age only for statistical purposes.');
    

<<<<<<< HEAD
   console.log("code has been added to from b1");
   

=======
>>>>>>> 8b51e4830475377cf2771b702337021205ba8523
})

