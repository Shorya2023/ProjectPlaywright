import {Locator, test,Page,expect} from '@playwright/test'

export class PaymentPage{
     private readonly payment: Locator;


  constructor (public page:Page)
  {
    this.payment= this.page.locator(""); 
  }

  async verifyPaymentText()
  {
      expect (this.payment).toBeEnabled;
      
  }







}