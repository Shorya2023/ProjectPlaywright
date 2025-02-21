import { test, expect } from '@playwright/test';


test.describe.configure({mode:'serial'})


test('test login page_Smoke_01', {tag: '@Smoke',}, async ({ page }) => {
  // ...
  console.log("Smoke is running  .....");
  
});


test('test login page_Regression_02', {tag: '@Regression',}, async ({ page }) => {
      // ...
      console.log("Regression is running  .....");
      
    });

    
    test('test login page_Sanity_03', {tag: '@Sanity',}, async ({ page }) => {
      // ...
      console.log("Sanity is running  .....");
      
    });

    
    test('test login page_Smoke_04', {tag: '@Smoke',}, async ({ page }) => {
      // ...
      console.log("Smoke is running  .....");
      
    });

    
    test('test login page_Sanity_05', {tag: '@Sanity',}, async ({ page }) => {
      // ...
      console.log("Sanity is running  .....");
      
    });
    