import {Locator, test,Page} from '@playwright/test'

export class LoginPage{
     private readonly username: Locator;
     private readonly password: Locator;
     private readonly LoginBtn: Locator;


  constructor (public page:Page)
  {
    this.username= this.page.locator("");
    this.password=this.page.locator("");
    this.LoginBtn=this.page.locator("");
  }

  async Logintoapp()
  {
      this.username.fill("");
      this.username.fill("");
      this.LoginBtn.click();
  }







}