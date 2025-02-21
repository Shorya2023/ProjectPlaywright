import {Locator, test,Page,expect} from '@playwright/test'

export class SumbitPage{
     private readonly submit: Locator;


  constructor (public page:Page)
  {
    this.submit= this.page.locator(""); 
  }

  async verifySubmitText()
  {
      this.submit.click();
      
  }







}