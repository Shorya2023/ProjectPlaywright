import {test, expect, request} from '@playwright/test'
import { ok } from 'assert';

let baseURL;

   test.beforeAll("beforea ll setup", async()=>{
          baseURL = await  request.newContext({baseURL: "https://reqres.in"}) ;    
        });

  test("Post Users data ", async({})=>{
        const postData =await baseURL.post("api/users", {
        data:{
            "name": "rocky",
            "job": "CS"
             },
             Headers:{'Content-Type': 'application/json'}
      })
      const jsonRes = await postData.json();
      console.log(jsonRes.job);
      
      expect(await postData.status()).toBe(201);
      expect(await postData.statusText()).toBe("Created")
      expect(await jsonRes.job).toEqual("CS");
      
  })  

  
  test("Post Register  ", async({})=>{
    const postData =await baseURL.post("api/register", {
    data:{
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    },
         Headers:{'Content-Type': 'application/json'}
  })
  const jsonRes = await postData.json();
  console.log(jsonRes);
  
  console.log(jsonRes.password);
  
  expect(await postData.status()).toBe(200);
  expect(await postData.statusText()).toBe("OK")
  expect(await jsonRes.password).toEqual("pistol");
  
})  

