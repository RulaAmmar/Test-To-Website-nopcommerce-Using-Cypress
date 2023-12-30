eature: Check add new campaigns functionality

    The user should be able add new campaigns

    Scenario: Verify that the user can add new campaigns successfully
        Given The user navigated to website
        When   click on login button 
        And    click on Promotions link
        And    click on Campaigns link
        And    click on Add new button
        And    enters name in name input field
        And    enters subject in subject input field
        And    enters Body in Body input field
        Then  The new new campaigns should be added successfully with "The new campaign has been added successfully.
"