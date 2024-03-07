const { LoginPage } = require('../page-objects/logInPage');
const { test, expect } = require('@playwright/test');
const { loginInfo } = require('../playwright.config');

test.describe("Validate login functionality", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo(loginInfo.url);
    });

    test("User can login with valid credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.validLogin(loginInfo.userName, loginInfo.password);
        // Wait for the logo element with a timeout of 10 seconds and a polling interval of 2 seconds
        const logoElement = await page.waitForSelector('#nav-logo-sprites', { timeout: 10000, polling: 2000 });
        // Check if the logo element is visible
        const isLogoVisible = await logoElement.isVisible();
        expect(isLogoVisible).toBe(true);
    });
});
