import ChanelPage from "../../support/pageObjects/chanelPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Chanel US homepage", () => {
  ChanelPage.openHomePage();
});

When('I search for {string}', (product) => {
  ChanelPage.searchFor(product);
});

Then('I should see {string} in the search results', (product) => {
  ChanelPage.verifySearchResults(product);
});
