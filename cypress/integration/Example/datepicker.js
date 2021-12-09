/// <reference types="cypress"/> 
describe('Test Suite for Demo Websites', function() 
{
    
    it('First test case for Autom complete dynamic DDL' ,  function () {
      cy.visit('https://test.qatechhub.com/form-elements/')
      cy.get('#genesis-mobile-nav-primary').click()
      cy.get('#menu-item-129 > .sub-menu-toggle').click()
      cy.get('#menu-item-125 > a > span').click()
      cy.get('#datepicker').click()
      cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default').click()
   

      })
         

})