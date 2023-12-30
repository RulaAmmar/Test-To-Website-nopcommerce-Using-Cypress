import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
Given("The user navigated to website",()=>{
    cy.visit("/admin/")
    });
    
    When("The user click on login button",()=>{
        cy.get(".login-button").click().wait(1000)
    })
    When("click on Promotions link",()=>{
       cy.get(".nav-sidebar > li:nth-child(5) > a").click()
    })
    When("click on  Affiliates link",()=>{
       cy.contains("Affiliates").click({force:true}).wait(1000)
     })
     When("click on Add new button",()=>{
        cy.contains("Add new").click().wait(2000)
     })
     When("check on the active checkbox",()=>{
        cy.get("#Active").check()
     })
     When("enters First name in First name input field",()=>{
       cy.get("#Address_FirstName").type("Rula")
     })
     When("enters Last name in Last name input field",()=>{
        cy.get("#Address_LastName").type("Ammar")
     })
     When("enters Email in Email input field",()=>{
        cy.get("#Address_Email").type("rulaammar13@gmail.com")
     })
     
     When("select Country",()=>{
        cy.get("#Address_CountryId").select('Togo',{force:true})
     })
     When("enters County in County input field",()=>{
        cy.get("#Address_County").type("Tulkarm")
     })
     When("enters City in City input field",()=>{
       cy.get("#Address_City").type("Qafin")
     })
     When("enters Address 1 in Address 1 input field",()=>{
        cy.get("#Address_Address1").type("Al-Zumra Street, western side")
     })
     When("enters Zip code in Zip code input field",()=>{
        cy.get("#Address_ZipPostalCode").type('1234')
     })
     When("enters Phone number in Phone number input field",()=>{
        cy.get("#Address_PhoneNumber").type("056322355")
     })
     When("click on Save button",()=>{
        cy.contains("Save").click({force:true}).wait(1000)
     })
     Then("The new affiliates should be added successfully with {string}",(message)=>{
        cy.get(".alert ").should("contain",message)
       })
