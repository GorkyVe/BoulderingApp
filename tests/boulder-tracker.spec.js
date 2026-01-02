const { test, expect } = require('@playwright/test');

test('manual climb button becomes end manual climb button and is visible', async ({ page }) => {
  // Navigate to the index.html page
  await page.goto('file://' + process.cwd() + '/index.html');

  // Click the "Start Manual Climb" button
  await page.click('button#manualClimbBtn');

  // Get the button again
  const manualClimbBtn = page.locator('button#manualClimbBtn');

  // Assert that the button's text has changed to "End Manual Climb"
  await expect(manualClimbBtn).toHaveText('End Manual Climb');

  // Assert that the button is still visible
  await expect(manualClimbBtn).toBeVisible();

  // Take a screenshot to visually confirm the change
  await page.screenshot({ path: 'tests/manual-climb-button-visible.png' });
});
