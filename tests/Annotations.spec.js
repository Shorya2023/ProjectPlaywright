import {test, expect } from "@playwright/test";

//skip a test
test("Tc001",async ({page})=>{
    console.log("TC001 execued.....");

})


test("Tc002Two",async ({page})=>{
//skip vs fixme bothe skip the test but skip can make a condition but in fixme cannnottest("Tc002",async ({page})=>{
    console.log("TC002 execued.....");
    let x=true;
    if (x)
    {
        test.skip();
    }

})

test("Tc003",async ({page})=>{
    console.log("TC003 execued.....");

})

test("Tc004",async ({page})=>{
    console.log("TC004 execued.....");

})


//to make a test failed ...negaive testing 
test.fail("Tc005_failed4",async ({page})=>{
    console.log("TC005 failed  execued.....");
    let a=10;
    expect(a).toBe(10);
})