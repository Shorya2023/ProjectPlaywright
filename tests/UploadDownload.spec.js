// import{test,expect} from '@playwright/test'

// import {Exceljs} from 'exceljs'
// test("upload download excel", async({page})=>{
//      let filpath="D:/Automation/PlaywrightUI_Automation/DownlaodFiles/"
//      await page.goto("https://rahulshettyacademy.com/upload-download-test/");
//      /// download excel file 
//      const downloadbutton   = await page.getByText("Download")
//      await page.waitForTimeout(6000);
//      const downloadPromise  =  page.waitForEvent('download')
//      downloadbutton.click();
//      const downloadFile = await downloadPromise;
//      await  downloadFile.saveAs(filpath+  downloadFile.suggestedFilename());
//      await page.waitForTimeout(7000);
//     //Read and update excel file
//     const objWorkbook=  new Exceljs.Workbook();
//     await objWorkbook.xlsx.readFile("D:/Automation/PlaywrightUI_Automation/DownlaodFiles/download.xlsx");
//    const objWorksheet  =  objWorkbook.getWorksheet('Sheet1')
//     const value=  objWorksheet.getCell('A1').value
//      console.log(value);
  
//     });






