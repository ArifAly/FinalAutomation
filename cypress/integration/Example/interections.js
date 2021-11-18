 import interaction from "../../support/pageobjects/interaction"
describe('Test Suite for Demo Websites', function() 
{
    
    it('First test case for Autom complete dynamic DDL' ,  function () {
      const inte = new interaction();
      cy.visit('https://test.qatechhub.com/form-elements/')
      inte.getprimary().click()
       inte.getToggle().click()
       inte.getSpan().click()
       inte.getTittle().should("have.text", "Selectable")
      inte.getChild().click()
      })
})