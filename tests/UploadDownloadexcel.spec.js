import{test,expect} from '@playwright/test'

test("upload download excel", async({page})=>{
     let filpath="D:/Automation/PlaywrightUI_Automation/DownlaodFiles/"
     await page.goto("https://rahulshettyacademy.com/upload-download-test/");
     /// download excel file 
     const downloadbutton   = await page.getByText("Download")
     await page.waitForTimeout(6000);
     const downloadPromise  =  page.waitForEvent('download')
     downloadbutton.click();
     const downloadFile = await downloadPromise;
     await  downloadFile.saveAs(filpath+"excel_"+Date.now()+  downloadFile.suggestedFilename());
     await page.waitForTimeout(7000);


    //Read and update excel file
//     const workbook = xlsx.readFile()


    });






