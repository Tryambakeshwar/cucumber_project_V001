Feature: Test sips-site Login functionality

Scenario: verify login functinality with valid credential
Given user need to be on sips login page
When user enter email as "admin@yourstore.com"
And user enter password as "admin"
And user click on login button
Then dashbord page title should be visible "Dashboard / nopCommerce administration"
And user click on logout link
And login page title should be visible "Your store. Login"
And close brawser

Scenario Outline: verify login functinality with valid and invalid credential
Given user need to be on sips login page
When user enter email as "<email>"
And user enter password as "<password>"
And user click on login button
Then dashbord page title should be visible "Dashboard / nopCommerce administration"
And user click on logout link
And login page title should be visible "Your store. Login"
And close brawser

Examples:
|email|password|
|admin@yourstore.com|admin|
|admin234@yourstore.com|admin|
|admin@yourstore.com|admin123|