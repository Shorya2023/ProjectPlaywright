// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */ 
import dotenv from 'dotenv';
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['line'],['list', { printSteps: true }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless : false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',

      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or "msedge-beta" or 'msedge-dev'
    // },
    // {
    //    name:'setup',
    //    testMatch: '**/*.setup.spec.js',
    //    teardown:'Cleanup Objects'
    // },
    // {
    //   name: 'Cleanup Objects',
    //   testMatch: '**/*.Teardown.spec.js',
    // },
    // {
    //   name: 'SmokeTests',
    //   use :{
    //            testMatch: /^Smoke.*\.spec\.ts$/,
    //       },
    // },
    // {
    //   name:'staging',
    //   use: {
    //         baseURL: "https://www.demoblaze.com/"
    //        },
    //        dependencies: ['setup'],
    // },
    // {
    //   name:'production',
    //   use: {
    //         baseURL: "https://automationexercise.com/login"
    //        },
    // },
   
    // {
    //   name: 'chrome',
    //   use: { ...devices['Desktop Chrome'] },

    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

