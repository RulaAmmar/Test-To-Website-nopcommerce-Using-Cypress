Feature: Check add new affiliates functionality

    The user should be able add new affiliates
     

    Scenario: Verify that the user can add new affiliates successfully
        Given The user navigated to website
        When  The user click on login button 
        And    click on Promotions link
        And    click on  Affiliates link
        And    click on Add new button
        And    check on the active checkbox
        And    enters First name in First name input field
        And    enters Last name in Last name input field
        And   enters Email in Email input field
        And   select Country
        And   enters County in County input field
        And   enters City in City input field
        And   enters Address 1 in Address 1 input field
        And   enters Zip code in Zip code input field
        And   enters Phone number in Phone number input field
        And   click on Save button
        Then  The new affiliates should be added successfully with "The new affiliate has been added successfully."