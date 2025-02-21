import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demoblaze&oq=demoblaze&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU1NTZqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Demo Blaze Demo Blaze https' }).click();
});