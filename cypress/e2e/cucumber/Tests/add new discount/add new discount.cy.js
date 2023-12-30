import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to website",()=>{
cy.visit("/admin/")
});

When("The user click on login button",()=>{
    cy.get(".login-button").click()
})
When("The user click on Promotions link",()=>{
   cy.get(".nav-sidebar > li:nth-child(5) > a").click()
   cy.contains("Promotions").click().wait(1000)
})
When("The user click on Discounts link",()=>{
    cy.contains("Discounts").click({force:true}).wait(2000)
 })
 When("The user click on Add new button",()=>{
    cy.contains("Add new").click()
 })
 When("The user enters the name of the discount in the required input field",()=>{
    cy.get("#Name").type("66% order total discount")
 })
 When("The user select the type of discount assigned to shipping",()=>{
    cy.get("#DiscountTypeId").select(4).wait(1000)
 })
 When("The user click on the use percentage checkbox",()=>{
   cy.get("#UsePercentage").check()
 })
 When("The user enter discount percentage in field",()=>{
    cy.get("[title='0.0000 USD']").type("90",{force:true})
  })
  When("The user check on the Requires coupon code checkbox",()=>{
   cy.get("#RequiresCouponCode").check()
  })
  When("The user enter Coupon code in field",()=>{
    cy.get("#CouponCode").type(1234)
   })
   When("The user click on Save button",()=>{
  cy.contains("Save").click({force:true}).wait(1000)
   })
   Then("The new discount should be added successfully with {string}",(message)=>{
    cy.get(".alert ").should("contain",message)
   })