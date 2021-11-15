/// <reference types="cypress"/> 
describe('Test Suite for Demo Websites', function() 
{
    
    it('First test case for Autom complete dynamic DDL' ,  function () {
      cy.visit('https://test.qatechhub.com/form-elements/')
      cy.get('#genesis-mobile-nav-primary').click()
      cy.get('#menu-item-129 > .sub-menu-toggle').click()
      cy.get('#menu-item-126 > a > span').click()
      cy.get('.ui-autocomplete-input').type("se")
      cy.wait(2000)
      cy.get("div[tabindex='-1']").each(($el, index, $list)=> 
      {
        if($el.text()==="Selenium")
        {
          $el.click()
        }
      })

      })
         

})