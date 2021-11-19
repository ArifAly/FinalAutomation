/// <reference types="cypress"/> 
import widget from "../../support/pageobjects/widget"
describe('Test Suite for Demo Websites', function() 
{
    before(() => {
        cy.fixture('example').then(function(data) 
        {
           this.data =data
        })
      })
    it('First test case for Form Elements' ,  function () {
          const wid = new widget();
         cy.visit('https://test.qatechhub.com/form-elements/')
          wid.getPrimary().click()
         wid.getToggle().click()
          wid.getSpan().click()
          wid.getClick1().click()
        // cy.get('#ui-id-2').should("have.text", "Hello, This is the first accordion! Welcome to Test QA Tech Hub")
         wid.getClick2().click()
         wid.getClick3().click()
         wid.getClick4().click()
        
        //cy.get('#ui-id-8 > p').should("have.text", "Hello, This is the forth accordion! Welcome to Test QA Tech Hub")

   
      })
        

})