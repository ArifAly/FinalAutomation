 
describe('Test Suite for Demo Websites', function() 
{
    
    it('First test case for Autom complete dynamic DDL' ,  function () {
      cy.visit('https://test.qatechhub.com/form-elements/')
      cy.get('#genesis-mobile-nav-primary').click()
      cy.get('#menu-item-131 > .sub-menu-toggle').click()
      cy.get('#menu-item-124 > a > span').click()
      cy.get('.entry-title').should("have.text", "Selectable")
      cy.get('#selectable > :nth-child(3)').click()
        

      })
         

})