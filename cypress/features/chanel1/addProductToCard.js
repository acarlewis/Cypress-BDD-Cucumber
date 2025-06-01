import ChanelPage from "../../support/pageObjects/chanelPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Chanel US homepage", () => {
  ChanelPage.openHomePage();
});

When('I click On the category {string} btn in navbar', (btnName) => {
  ChanelPage.clickOnCategoryButton(btnName);
});

// Then('I should be able to see {string} in the dropdown and click on it', (product) => {
//   // ChanelPage.verifySearchResults(product);
// });

// When('The Products are visible', () => {
//   // ChanelPage.searchFor(product);
// });

// Then('I click on {string} Product', (product) => {
//   // ChanelPage.verifySearchResults(product);
// });

// When('I should be able to add {string} to Card', (product) => {
//   // ChanelPage.searchFor(product);
// });

// Then('View Card list', () => {
//   // ChanelPage.verifySearchResults(product);
// });