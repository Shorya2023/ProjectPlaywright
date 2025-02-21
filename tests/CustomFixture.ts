import {test as base,Page,Browser} from '@playwright/test'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { PaymentPage } from './PaymentPage'
import { SumbitPage } from './SumbitPage'

type Pages={
 allPages:{
            objloginpage: LoginPage;
            objhomepage:HomePage;
            objpaymentpage:PaymentPage;
            objsumbitpage:SumbitPage
}
}

export const test = base.extend<Pages>({

          
    allPages  :async({browser},use)=>{
        let context = await browser.newContext();
        let page = await context.newPage();
        const objloginpage = new LoginPage(page);
        const objhomepage = new HomePage(page);
        const objpaymentpage = new PaymentPage(page);
        const objsumbitpage = new SumbitPage(page);

        await use( {objloginpage,objhomepage,objpaymentpage,objsumbitpage})
    }


})