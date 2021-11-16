/// <reference types="cypress"/> 
 import autocomplete from "../../support/pageobjects/autocomplete"
describe('Test Suite for Demo Websites', function() 
{
  before(() => {
    cy.fixture('example').then(function(data) 
    {
       this.data =data
    })
  })
    it('First test case for Autom complete dynamic DDL' ,  function () {
       const complete = new autocomplete();
      cy.visit('https://test.qatechhub.com/form-elements/')
       complete.getPrimaryNav().click()
       complete.getsubMenu().click()
       complete.getMenuItem().click()
       complete.getInput().type(this.data.course)
      cy.wait(2000)
       complete.gerTabIndex().each(($el, index, $list)=> 
      {
        if($el.text()==="Java")
        {
          $el.click()
        }
      })
       
      })
         

})