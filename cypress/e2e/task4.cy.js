/// <reference types="cypress"/>  

it("Add item to cart",()=>{
cy.visit("/")
cy.get("#search").type("shirt"+"{enter}",{delay:500});
cy.get("div.product-item-info").eq(0).click({delay:500})
cy.get(".swatch-option.text").eq(2).click()
cy.get(".swatch-option.color").eq(2).click({delay:500})
cy.get("#qty").clear().type("3")
cy.contains("Add to Cart").click()
}
)