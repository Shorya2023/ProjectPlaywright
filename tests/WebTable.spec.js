import {test,expect} from '@playwright/test'

test("Webtable -->", async({page})=>{
        await page.goto("https://cosmocode.io/automation-practice-webtable/");

        const headers=  page.locator("//table//tbody//tr[1]//h3");
        const rows = page.locator("//table//tbody//tr");
        const Total_coulumns = await headers.allTextContents();
        console.log("Total Cols", Total_coulumns.length);
        const Total_rows = await rows.allTextContents();
        console.log("Total Rows", Total_rows.length);

        const MatchedRow = rows.filter({
                has: page.locator('td'),
                hasText: "Tirane"
        })

       await MatchedRow.locator('input').check();

        // for (const r of Total_rows)
        // {
        //         for (const j of Total_coulumns)
        //         {
        //                 console.log(j);
        //          console.log("---------------------------");

        //                 console.log(r);
        //             console.log("*************************");
                        
                        
        //         }
        // }


    
        
})