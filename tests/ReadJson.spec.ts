import {test} from '@playwright/test'
import fs from 'fs'
import {helperJson} from './JsonHelper'
const data = JSON.parse(fs.readFileSync('./testData.json', 'utf8'));

test("json",async({})=>{
console.log(data.TC001);
console.log(data.TC002);
})

test("Read json from helper function_TC003",async({})=>{

       let value:string =await helperJson.readJsonValue("payment");
       console.log(typeof value+"---"+value);
       let value1:string =await helperJson.readJsonValue("namee");
       console.log(typeof value1+"---"+value1);
       let value2:string =await helperJson.readJsonValue("description");
       console.log(typeof value2+"---"+value2);
       
})