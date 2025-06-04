Feature: Chanel Add Product To Card

  Scenario: User adds ROUGE ALLURE to card
    Given I open the Chanel US homepage
    When I click On the category "Makeup" btn in navbar
    Then I should be able to see "Lipstick" in the dropdown and click on it
    When The Products are visible and click on "ROUGE ALLURE" Product
    Then I should be able to add "ROUGE ALLURE" to Card
    # Then I should see "ROUGE ALLURE" in the card
    # Then Compare the product price with "ROUGE ALLURE" price in the card
    # Then View Card list
