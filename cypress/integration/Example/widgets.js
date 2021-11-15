/// <reference types="cypress"/> 
describe('Test Suite for Demo Websites', function() 
{
    before(() => {
        cy.fixture('example').then(function(data) 
        {
           this.data =data
        })
      })
    it('First test case for Form Elements' ,  function () {
         cy.visit('https://test.qatechhub.com/form-elements/')
         cy.get('#genesis-mobile-nav-primary').click()
         cy.get('#menu-item-129 > .sub-menu-toggle').click()
         cy.get('#menu-item-127 > a > span').click()
         cy.get('#ui-id-1').click()
        // cy.get('#ui-id-2').should("have.text", "Hello, This is the first accordion! Welcome to Test QA Tech Hub")
        cy.get('#ui-id-3').click()
        cy.get('#ui-id-5').click()
        cy.get('#ui-id-7').click()
        //cy.get('#ui-id-8 > p').should("have.text", "Hello, This is the forth accordion! Welcome to Test QA Tech Hub")

   
      })
        

})