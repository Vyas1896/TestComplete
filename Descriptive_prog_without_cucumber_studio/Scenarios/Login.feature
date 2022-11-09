Feature: Login page on A.i.Online

  Scenario: Valid login
    Given The application is up and running
    When user enter valid username "testskipcaptch"
    When user enter valid password "Alexa@1234"
    Then user should log in and see documnent translation dashboard
    
  Scenario Outline: non-Valid login    
    Given The application is up and running
    When user enter in-valid username "<username>"
    When user enter in-valid password "<password>"
    Then user should not log in to A.I.online and see the error message
    
    Examples:
    |username|password|
    |jvcxs|jsbbiw|
    |kqhegbkb|l45544|