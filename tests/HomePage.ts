import {Locator, test,Page,expect} from '@playwright/test'

export class HomePage{
     private readonly usernameText: Locator;


  constructor (public page:Page)
  {
    this.usernameText= this.page.locator(""); 
  }

  async verifyHomeText()
  {
      expect (this.usernameText).toBeEnabled;
      
  }







}