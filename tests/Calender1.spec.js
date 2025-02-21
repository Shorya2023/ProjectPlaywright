import {test, expect } from "@playwright/test";
test("Calender solution", async({page})=>{
       await page.goto("https://demoqa.com/date-picker");
       await page.locator("#datePickerMonthYearInput").click()
       await page.locator(".react-datepicker__month-select").selectOption("June");
       await page.locator(".react-datepicker__year-select").selectOption("2021");
       let sdatePicker = (13).toString().padStart(3, '0'); // Dynamically format the number with leading zeros
      // await page.locator(`//div[@class='react-datepicker__day react-datepicker__day--${sdatePicker}']`).click();
       await page.locator(".react-datepicker").filter({hasText:"26"}).click();                     
       await page.waitForTimeout(3000)

})