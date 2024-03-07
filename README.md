## Playwright
[Playwright](https://playwright.dev/) is a JavaScript testing framework that allows you to write and execute automated browser tests using different helpers. In this project, we use Playwright as the helper to automate the Risk App.
## How to work with this project 
Prerequisites
- Node.js and npm should be installed on your machine.
1. clone this repo.
2. Install dependencies listed in the package.json.
```bash
npm init
```
```bash
npm init playwright@latest
```
3. Set up environment variables by creating a .env file at the root of the project with the following variables:
   - AZ_APP_URL=URL_of_your_application
   - USERNAME=Your_Username
   - PASSWORD=Your_Password
## Project structure
   - Locaters placed under Page-object folder
   - Script places under tests folder
   - Places all the credentials under .env  
## How to Run the Tests
- Run all UI tests in your project To execute all the tests run the following command:
```bash
npx playwright test tests/{File Name} --headed
```