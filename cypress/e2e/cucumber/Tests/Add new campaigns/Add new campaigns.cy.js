import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to website",()=>{
    cy.visit("/admin/")
    });
    
    When("click on login button",()=>{
        cy.get(".login-button").click()
    })
    When("click on Promotions link",()=>{
       cy.get(".nav-sidebar > li:nth-child(5) > a").click()
       cy.contains("Promotions").click()
    })
    When("click on Campaigns link",()=>{
        cy.contains(" Campaigns").click({force:true})
     })
     When("click on Add new button",()=>{
        cy.contains("Add new").click().wait(2000)
     })
     When("enters name in name input field",()=>{
        cy.get("#Name").type("Campaign4")
     })
     When("enters subject in subject input field",()=>{
        cy.get("Subject").type("Type-221")
     })
     When("enters Body in Body input field",()=>{
        cy.get("Body").type("add new campaigns successfully")
     })
     Then("The new new campaigns should be added successfully with {string}",(message)=>{
        cy.get(".alert ").should("contain",message)
       })


