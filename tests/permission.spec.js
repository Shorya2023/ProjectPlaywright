import { test } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  // Runs before each test and signs in each page.
  await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });
});

test('first', async ({ page }) => {
  // page has notifications permission for https://skype.com.

  await page.goto('https://skype.com')
});