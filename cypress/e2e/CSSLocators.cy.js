describe('CSSLocators', () => {



it("csslocators", () => {

    cy.visit("https://demo.nopcommerce.com/")

    cy.get("#small-searchterms").type("Phone")

    cy.get('button[type="submit"].button-1.search-box-button').click()
    cy.contains('a', 'HTC One M8 Android L 5.0 Lollipop').click()  //CHatgpt help (revise)
    cy.get(".price-value-18").contains("$245.00") //This is to check that the page....Assertion    

    
    





    

    

   // cy.get("#chrome-search").type("Joggers")

   // cy.get("button[type='submit']").click


   
})

})