/// <reference types="cypress"/> 

import datepicker from "../../support/pageobjects/datepicker"

describe('Test Suite for Demo Websites', function() 
{
    
    it('First test case for Autom complete dynamic DDL' ,  function () {
      const date = new datepicker();
      cy.visit('https://test.qatechhub.com/form-elements/')
       date.getmobile().click()
      date.getToggle().click()
       date.getItem().click()
       date.getdateepicker().click()
      date.getChild().click()
      })
})