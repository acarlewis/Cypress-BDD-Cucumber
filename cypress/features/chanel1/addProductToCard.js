import ChanelPage from "../../support/pageObjects/chanelPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Chanel US homepage", () => {
  ChanelPage.openHomePage();
});

When('I click On the category {string} btn in navbar', (btnName) => {
  ChanelPage.clickOnCategoryButton(btnName);
});

Then('I should be able to see {string} in the dropdown and click on it', (product) => {
  ChanelPage.clickOnSubCategory(product);
});

When('The Products are visible and click on {string} Product', (product) => {
  ChanelPage.verifyProductAvailabilityAndClick(product);
});

Then('Get product price and add ROUGE ALLURE to card', () => {
  ChanelPage.GetProductPrice();
  ChanelPage.addProductToCart();
});

When('I open the card i should see {string} in the card', (product) => {
  ChanelPage.verifyProductInCart(product);
});

Then('I should compare the price of ROUGE ALLURE in the card with the product price', () => {
  // ChanelPage.compareProductPrice(product);
});