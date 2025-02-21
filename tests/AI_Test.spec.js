import {test, expect} from '@playwright/test'
import { ai }  from '@playwright/test'

test.describe('AI enabled tst case', ()=>{
 test("Ai..... ",async({page})=>{
  
    await page.goto("https://automationexercise.com/login") ;
    await ai('Enter Email Address as mon@tsl.com',{page,test});
    await ai('Enter Password as india',{page,test});

    await ai('Click on Login Button',{page,test});



 })

})
