/// <reference types="cypress"/> 
 import formElements from "../../support/pageobjects/formElements"

describe('Test Suite for Demo Websites', function() 
{
    before(() => {
        cy.fixture('example').then(function(data) 
        {
           this.data =data
        })
      })
    it('First test case for Form Elements' ,  function () {
        const formelements = new formElements();
         cy.visit('https://test.qatechhub.com/form-elements/')
          formelements.getfirstName().type(this.data.firstName)
          formelements.getlastName().type(this.data.lastName)
           formelements.getemail().type(this.data.email) 
           formelements.getphoneNumber().type(this.data.phoneNumber)
           formelements.getJustClick().click()
         formelements.getSelect().select('Cypress')
          formelements.getFormClick().click()
          formelements.getText().should("have.text", "You have successfully filled in the form!")
         cy.get('#genesis-mobile-nav-primary').click()
         cy.get('#menu-item-123 > .sub-menu-toggle').click()
         cy.get('#menu-item-102 > a').click()
         //cy.get('.wp-block-file__button').click()
          formelements.getPrimary().click() 
           formelements.getToggle().click()
          formelements.getSpan().click()
          formelements.getTittle().should("have.text", "Alert Handling")
          formelements.getNormalAlert().click()
          formelements.getCustomAlert().click()
          formelements.getPromptAlert().click()
          formelements.getMobile().click()
          formelements.getSubMenu().click()
          formelements.getNewSpan().click()
         formelements.getEntryTittle().should("have.text", "Window Handling")
         formelements.getLink().click()
         

        })
        

})