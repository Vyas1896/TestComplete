Feature: Verifying Text translation on A.I.online
 
  Scenario: Text Translation should translate the text 
    Given The application is up and running
    When user enter valid username "testskipcaptcha"
    When user enter valid password "Alexa@1234"
    Then user should log in and see documnent translation dashboard
    When I click on Text button 
    Then I should see the text translation block
    When I enter any text on source text box
    Then It should give translation on target side
    And close the browser  