require('dotenv').config();

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator(`input[name="email"]`);
        this.password = page.locator(`input[type="password"]`);
        this.continueButton = page.locator(`input[type='submit']`);
        this.SignIn = page.locator(`#signInSubmit`);
        this.logo = page.locator(`#nav-logo-sprites`);
    }
    async goTo(url) {
        await this.page.goto(url);
    }
    async validLogin(userName, password) {
        await this.userName.type(userName);
        await this.continueButton.click();
        await this.password.type(password);
        await this.SignIn.click();
    }
}
