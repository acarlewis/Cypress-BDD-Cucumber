import ChanelPage from "../../support/pageObjects/chanelPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Chanel US homepage", () => {
  ChanelPage.openHomePage();
});
