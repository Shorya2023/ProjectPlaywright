import {test, expect, request} from '@playwright/test'

let baseURL;

   test.beforeAll("beforea ll setup", async()=>{
          baseURL = await  request.newContext({baseURL: "https://reqres.in"}) ;    
        });


 test("verfu api details status code and status", async({})=>{
    const response  = await baseURL.get("api/unknown");
      console.log(await response.json());
      expect(response.status()).toBe(200)
      expect(response.ok).toBeTruthy();
})  

test("verify api details status code and status for query parameter", async({request})=>{
    const response  = await baseURL.get("api/users?page=2");
      console.log(await response.json());
      expect(response.status()).toBe(200)
      expect(response.ok).toBeTruthy();
})  


test("verify api details status code and status for page queryparamteere", async({request})=>{
    const response  = await baseURL.get("api/users",{params:{page:"2"},});
      console.log(await response.json());
      expect(response.status()).toBe(200)
      expect(response.ok).toBeTruthy();
})  

test("verify api details status code and status vverification", async({request})=>{
    const response  = await baseURL.get("api/users/7");
      console.log(await response.json());
      expect(response.status()).toBe(200)
      expect(response.ok).toBeTruthy();
})  
test("verify api details status code and status against single users ", async({request})=>{
    const response  = await baseURL.get("api/users/2");
      console.log(await response.json());
      expect(response.status()).toBe(200)
      expect(response.ok).toBeTruthy();
    //  expect(response.data.first_name).toEqual("Janet");
    //   expect(response.data[last_name]).toEqual("Weaver");

     // expect(response.json).toMatchObject( )
})  

