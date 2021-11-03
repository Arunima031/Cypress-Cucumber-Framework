Feature: Login Feature
   Testing Login Page for the Website
   
   Scenario: Valid Login

      Given I navigate to the website
      When I Enter Username "Admin" and Password "admin123" for a user
      And I click login button
      Then I land on Homepage


   Scenario: Invalid Login

      Given I navigate to the website
      When I Enter Username "Admin" and Password "123" for a user
      And I click login button
      Then I validate Error Message