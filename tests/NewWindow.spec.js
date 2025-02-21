import {test,expect} from '@playwright/test'

test("New window", async ({context})=>{

          const spage =await context.newPage();
          await spage.goto("https://www.tutorialspoint.com/selenium/practice/browser-windows.php");
          console.log((spage.title()));
          const contextpromise = context.waitForEvent('page');
          await spage.getByRole("button",{name: "New Window",exact: true}).click();
          const newPage =await contextpromise;
            newPage.getByText("Sample Text").highlight();
            console.log((newPage.title()));
            await spage.getByRole("button",{name: "New Tab",exact: true}).click();
            await spage.getByRole("button",{name: "New Window Message",exact: true}).click();




})