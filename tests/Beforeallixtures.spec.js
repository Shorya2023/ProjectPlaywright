import {test} from '@playwright/test'


test.beforeEach("test started",async({page})=>{

    console.log(`Starting test worker ${test.info().workerIndex}`);
    
})



test.afterEach("test completed",async({page})=>{

    console.log(`Starting test worker ${test.info().workerIndex}`);
    
})

test("test 001",async({page})=>{

    console.log(`001 executed.....`);
    
})


test("test 002",async({page})=>{

    console.log(`002 executed.....`);
    
})


test("test 003",async({page})=>{

    console.log(`003 executed.....`);
    
})

