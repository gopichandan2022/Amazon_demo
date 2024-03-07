export class productPage {
    constructor(page) {
        this.page = page;
        this.search = page.locator(`//input[@name="field-keywords"]`);
        this.searchClick = page.locator(`#nav-search-submit-button`);
        this.clickProd = page.locator(`//span[contains(text(), "Apple iPhone 15 Pro (128 GB) - Blue Titanium")]/ancestor::div[@class="a-section a-spacing-small a-spacing-top-small"]//div[@data-cy="title-recipe"]`)
        this.addCart = page.locator(`(//input[@id='add-to-cart-button'])[2]`);
        this.cart = page.locator(`span#attach-sidesheet-view-cart-button>span>input`);
        this.cartButton = page.locator(`#nav-cart-count`)
    }
    async searchProd() {
        await this.search.type('Apple iPhone 15 Pro (128 GB) - Blue Titanium');
        await this.searchClick.click();
        await this.clickProd.click();
        await this.addCart.click();
        await this.cart.click();
        await this.cartButton.click();
    }
}
