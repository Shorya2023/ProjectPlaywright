import {test} from '@playwright/test'
import TestData from '../Data/Module01.json'


export class helperJson
    {
        public static readJsonValue(DataKey:string): string
        {
                const testName = test.info().title;
                let TC:string[]=testName.split("_");
                let dataSet = TC[1]
                try{
                        const jsObject = JSON.parse(JSON.stringify(TestData));
                        console.log(jsObject[dataSet][DataKey]); // Output: 1
                          if (dataSet=="undefined" || DataKey=="undefined")
                          {
                              console.log( `: Inccorrect dataset ${dataSet} or DataKey ${DataKey}`)
                          }
                        return jsObject[dataSet][DataKey];
                }catch(error)
                {
                        console.log(error+": dataset is not present in the .json file");
                        return error      
                }
        }
       
   }

