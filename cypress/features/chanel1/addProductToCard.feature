Feature: Chanel Add Product To Card

  Scenario: User adds ROUGE ALLURE to card
    Given I open the Chanel US homepage
    When I search for "ROUGE ALLURE"
    Then I should see ROUGE ALLURE in the search results
