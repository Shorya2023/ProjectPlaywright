import {test as basetest} from '@playwright/test'

const test =basetest.extend({
    chromeContext : async({browserType},use)=>{
         const Browser =  browserType.launch({headless:true})
         const myContext =  Browser.newContext();
            await use(myContext);
         
    },

    firefoxContext: async({browserType},use)=>{
        const Browser = browserType.launch({headless: false})
        const myContext = Browser.newContext();
        await use(myContext);
    }
})

