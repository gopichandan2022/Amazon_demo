// commonSteps.js
const { LoginPage } = require('../page-objects/logInPage');
const { test, expect } = require('@playwright/test');
const { loginInfo } = require('../playwright.config');

async function logIn(page) {
    const loginPage = new LoginPage(page);
    await loginPage.goTo(loginInfo.url);
    await loginPage.validLogin(loginInfo.userName, loginInfo.password);
    const logoElement = await page.waitForSelector('#nav-logo-sprites', { timeout: 10000, polling: 2000 });
    const isLogoVisible = await logoElement.isVisible();
    expect(isLogoVisible).toBe(true);
}

module.exports = {
    logIn
};
