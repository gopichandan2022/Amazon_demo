const { test } = require('@playwright/test');
const { productPage } = require('../page-objects/productPage');
const { logIn } = require('./commonSteps'); // Import the logIn function

test.describe("Validate login functionality", () => {
    test.beforeEach(async ({ page }) => {
        await logIn(page); // Call the logIn function with 'page' as a parameter
    });

    test("Search for a product and click on it", async ({ page }) => {
        const prodPage = new productPage(page);
        await prodPage.searchProd();
        await prodPage.searchClick();
        await prodPage.clickProd();
        // Wait for a new page to be opened
        const newPage = await this.page.waitForEvent('popup');
        // Switch to the new page
        await newPage.bringToFront();
        await prodPage.addCart();
        await prodPage.cart();
        await prodPage.clickProd();
        const itemName = await page.waitForSelector(`//span[text()='Apple iPhone 15 Pro (256 GB) - Blue Titanium']/following-sibling::span`, { timeout: 10000, polling: 2000 });
        // Check if the item is visible
        const isLogoVisible = await itemName.isVisible();
        expect(isLogoVisible).toBe(true);
        await page.close();
    });
});
