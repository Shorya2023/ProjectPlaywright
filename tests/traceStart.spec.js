import {test} from '@playwright/test'

test("test00",async({browser})=>{
       // const browser = await chromium.launch();
        const context = await browser.newContext();
        await context.tracing.start({ screenshots: true, snapshots: true });
        const page = await context.newPage();
        await page.goto('https://playwright.dev');
        await context.tracing.stop({ path: 'trace.zip' });
})