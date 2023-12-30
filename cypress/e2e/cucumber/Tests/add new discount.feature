Feature: Check add a new discount functionality

    The user should be able add a new discount
     

    Scenario: Verify that the user can add new discount successfully
        Given The user navigated to website
        When  The user click on login button 
        And   The user click on Promotions link
        And   The user click on Discounts link
        And   The user click on Add new button
        And   The user enters the name of the discount in the required input field
        And   The user select the type of discount assigned to shipping
        And  The user click on the use percentage checkbox 
        And  The user enter discount percentage in field
        And   The user check on the Requires coupon code checkbox 
        And   The user enter Coupon code in field
        And   The user click on Save button 
        Then  The new discount should be added successfully with "The new discount has been added successfully."