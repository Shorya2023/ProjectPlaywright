import {test,expect} from '@playwright/test'

test.describe.configure({mode:'default'})
test("TC001", async({page})=>{

    console.log("TC001..........EXECUTED"); 
          //  console.log(TestData);
    console.log("TC001..........completed");


    
})

test("TC002", async({page})=>{
    console.log("TC002..........EXECUTED");
    expect(false).toBeTruthy();

})


test("TC003", async({page})=>{
    console.log("TC003.........EXECUTED");

    
})

test("TC004", async({page})=>{
    console.log("TC004..........EXECUTED");

})


