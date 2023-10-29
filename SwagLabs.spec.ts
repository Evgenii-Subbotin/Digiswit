import { test, expect } from '@playwright/test';

test('SwagLabs Site is available', async ({ page }) => {
  //Verify that site is reachable, and site is titled as expected
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await page.screenshot({ path: 'SwagLabsSreens/Login.png' });
});

test('SwagLabs Site Simple Login', async ({ page }) => {
  //Open Site, Login with standard account. 
  //Check that SauceLab shop items are shown.
  //Check amount of SauceLab shop items 
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.locator('#login-button').click();

  const inventoryItemElement = await page.locator('div.inventory_item');
  const inventoryItemElementCount = await inventoryItemElement.count();
  expect(await inventoryItemElementCount).toBeGreaterThanOrEqual(1);
  console.log(`Number of inventory items of screen is equal : ${inventoryItemElementCount}`);
  await page.screenshot({ path: 'SwagLabsSreens/LandingPage.png' });
});

test('SwagLabs Site Shop item Details', async ({ page }) => {
  //Open Site, Login with standard account. 
  //Open Shop Item with name "Sauce Labs Backpack" and verify that description is visible and same to expected
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.locator('#login-button').click();

  await page.getByText('Sauce Labs Backpack').click();
  const textElement = await page.getByText('streamlined Sly Pack that melds uncompromising style with unequaled laptop and ');
  await expect(textElement).toBeVisible();
  await page.screenshot({ path: 'SwagLabsSreens/ItemDetailsPage.png' });
});

test('SwagLabs Site Shop item -Go Back And Logout', async ({ page }) => {
  //Open Site, Login with standard account. 
  //Open Shop Item with name "Sauce Labs Backpack"
  //Go back to the Landing Page and logout from shop. Verify that login page element is visible
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.locator('#login-button').click();

  await page.getByText('Sauce Labs Backpack').click();

  await page.locator('#back-to-products').click();
  await page.locator('#react-burger-menu-btn').click();

  await page.getByText('logout').click();

  const userNameElement = await page.getByText('Username');
  await expect(userNameElement).toBeVisible();

  await page.screenshot({ path: 'SwagLabsSreens/Logout.png' });
});