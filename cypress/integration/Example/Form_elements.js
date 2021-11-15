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
         cy.get('#wpforms-49-field_1').type(this.data.firstName)
         cy.get('#wpforms-49-field_1-last').type(this.data.lastName)
         cy.get('#wpforms-49-field_2').type(this.data.email) 
         cy.get('#wpforms-49-field_4').type(this.data.phoneNumber)
         cy.get('.choice-1 > .wpforms-field-label-inline').click()
         cy.get('#wpforms-49-field_5').select('Cypress')
         cy.get('#wpforms-submit-49').click()
         cy.get('#wpforms-confirmation-49 > :nth-child(1)').should("have.text", "You have successfully filled in the form!")
         cy.get('#genesis-mobile-nav-primary').click()
         cy.get('#menu-item-123 > .sub-menu-toggle').click()
         cy.get('#menu-item-102 > a').click()
         //cy.get('.wp-block-file__button').click()
         cy.get('#genesis-mobile-nav-primary').click()
          cy.get('#menu-item-130 > .sub-menu-toggle').click()
         cy.get('#menu-item-87 > a > span').click()
         cy.get('.entry-title').should("have.text", "Alert Handling")
         cy.get('#NormalAlert').click()
         cy.get('#CustomAlert').click()
         cy.get('#PromptAlert').click()
         cy.get('#genesis-mobile-nav-primary').click()
          cy.get('#menu-item-130 > .sub-menu-toggle').click()
        cy.get('#menu-item-101 > a > span').click()
        cy.get('.entry-title').should("have.text", "Window Handling")
        cy.get('.wp-block-button__link').click()
          
          

         
   


        })
        

})