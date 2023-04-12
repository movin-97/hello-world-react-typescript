Feature: API tests for fetching data
  As an API consumer
  I want to ensure that I can retrieve data from the API
  So that I can use it in my application

  Scenario: Fetching data from the API
    Given the API endpoint is "products/1"
    When I make a GET request to the endpoint
    Then the response status code should be 200
    And the response should contain an array of data objects
    And each data object should have the fields "id", "title", and "description"

