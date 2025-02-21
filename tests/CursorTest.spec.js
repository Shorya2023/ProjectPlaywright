import { test } from '@playwright/test';

test('Search for train from Bhopal to Khajuraho on IRCTC', async ({ page }) => {
  // Navigate to IRCTC site
  await page.goto('https://www.irctc.co.in/nget/train-search',{timeout:60000});
  
  // Wait for the search form to load
  await page.waitForSelector('input[aria-controls="pr_id_1_list"]');

  // Fill in the "From" station
  await page.getByRole('textbox', { name: 'From' }).press('BHOPAL');
  await page.getByText('BHOPAL JN - BPL').click();

  // Fill in the "To" station
  await page.getByRole('textbox', { name: 'To' }).press('KHAJURAHO');
  await page.getByText('KHAJURAHO - KURJ').click();

  // Click the search/login button
  await page.getByRole('button', { name: 'Login' }).click();
});
