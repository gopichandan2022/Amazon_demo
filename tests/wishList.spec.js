// ProductCheck.specs.js
const { test } = require('@playwright/test');
const { productPage } = require('../page-objects/productPage');
const { logIn } = require('./commonSteps'); 

test.describe("Validate login functionality", () => {
    test.beforeEach(async ({ page }) => {
        await logIn(page); // Call the logIn function with 'page' as a parameter
    });

    test("Navigate to WishList", async ({ page }) => {
        // Hover over the account list link
        await this.page.hover('a#nav-link-accountList > span');
        // Click on the wishlist link
        const wishlistLink = await this.page.locator('//span[text()="Watchlist"]');
        await wishlistLink.click();
    });
});
