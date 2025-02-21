import { test, expect } from "@playwright/test";

test.describe("Smoke",()=>{
    test.beforeEach("Smoke_Hooks",async ({page})=>{
        console.log("SmokeTest Hooks preTestdata ......");       
  })

  test.afterEach("Smoke_Hooks",async ({page})=>{
    console.log("SmokeTest Hooks Tear Down ......");
 
})

    test("Smoke_TC01",async ({page})=>{
          console.log("SmokeTest tc001......");
          
    })

    test("Smoke_TC02",async ({page})=>{
        console.log("SmokeTest tc002......");
        
  })

  test("Smoke_TC03",async ({page})=>{
    console.log("SmokeTest tc003......");
    
})


test("Smoke_TC04",async ({page})=>{
    console.log("SmokeTest tc004......");
    
})


})


test.describe("Regression",()=>{
    test.use({ colorScheme: 'dark' });


    test("Reg_TC01",async ({page})=>{
          console.log("Reg_TC01 tc001......");
          
    })

    test("Reg_TC02",async ({page})=>{
        console.log("Reg_TC01 tc002......");
        
  })

  test("Reg_TC03",async ({page})=>{
    console.log("Reg_TC03 ......");
    
})


test("Reg_TC04",async ({page})=>{
    console.log("Reg_TC04 ......");
    
})

})


