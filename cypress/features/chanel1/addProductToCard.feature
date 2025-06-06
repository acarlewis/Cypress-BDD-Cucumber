Feature: Chanel Add Product To Card

  Scenario: User adds ROUGE ALLURE to card
    Given I open the Chanel US homepage
    When I click On the category "Makeup" btn in navbar
    Then I should be able to see "Lipstick" in the dropdown and click on it
    When The Products are visible and click on "ROUGE ALLURE" Product
    Then Get product price and add ROUGE ALLURE to card
    When I open the card i should see "ROUGE ALLURE" in the card
    Then I should compare the price of ROUGE ALLURE in the card with the product price
