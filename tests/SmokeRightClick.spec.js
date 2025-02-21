import { test, expect } from "@playwright/test";

test("RightClick", async({page})=>{

    const appurl="https://demo.automationtesting.in/Datepicker.html";
    await page.goto(appurl);

     const calender = await page.locator("//input[@id='datepicker2']");

     await calender.click(calender ,'Right');

     await page.waitForTimeout(4000);

     //to doubleclick

    await calender.dblclick();
    await page.waitForTimeout(4000);


})