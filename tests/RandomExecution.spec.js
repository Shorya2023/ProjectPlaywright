import {test,expect} from '@playwright/test'

function runIfTrue()
{
    return Math.random()>=0.5
}

test("aTC001", async({page})=>{
if (runIfTrue){
    console.log("TC001..........EXECUTED");
}
else{
        test.skip('Skipped..1')
     }
})

test("bTC002", async({page})=>{
    if (runIfTrue){
        console.log("TC002..........EXECUTED");
    }
    else{
            test.skip('Skipped...2')
         }
})


test("cTC003", async({page})=>{
    if (runIfTrue){
        console.log("TC003..........EXECUTED");
    }
    else{
            test.skip('Skipped3')
         }
    
})

test("dTC004", async({page})=>{
    if (runIfTrue){
        console.log("TC004..........EXECUTED");
    }
    else{
            test.skip('Skipped4')
         }
    
})


