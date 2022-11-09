Feature: Descriptive_programing_Approach
    Verifying Login on A.I.Online

  Scenario: Test the Login screen
    Given The tested app is running
    And The Login form is on screen
    When I enter "testskipcaptcha" in the username and "Alexa@1234" in password edit box
    And I click Log In once
    Then I should see the document translation page in the Homepage
