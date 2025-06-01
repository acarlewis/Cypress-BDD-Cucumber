Feature: Chanel search feature

  Scenario: User searches for ROUGE ALLURE
    Given I open the Chanel US homepage
    When I search for "ROUGE ALLURE"
    Then I should see ROUGE ALLURE in the search results
