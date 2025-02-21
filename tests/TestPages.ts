import {test} from './CustomFixture.ts';



test("Login to submit tsts",async({allPages})=>{

            allPages.objloginpage.Logintoapp();
            allPages.objhomepage.verifyHomeText();
            allPages.objpaymentpage.verifyPaymentText();
            allPages.objsumbitpage.verifySubmitText();
    
})