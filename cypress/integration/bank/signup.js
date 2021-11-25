///<reference types="cypress"/>

import signup from "../../support/pageobjects/signup"

describe('Test suites for Bank System', function()
{
  before(() =>{
    cy.fixture('example').then(function(data)
    {
      this.data=data
    }) 
  })
  
    it('Test case for the register Process',function(){
      const sign = new signup()
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
       cy.get('#loginPanel > :nth-child(3) > a').click()
       cy.get('.form2').click()
       sign.getFirstname().type(this.data.FirstName)
       sign.getLastName().type(this.data.LastName)
       sign.getAddress().type(this.data.Address)
       sign.getCity().type(this.data.City)
       sign.getState().type(this.data.State)
       sign.getZipCode().type(this.data.ZipCode)
        sign.getPhoneNumber().type(this.data.phonenumber)
        sign.getSSN().type(this.data.SSN)
        sign.getUserName().type(this.data.Username)
        sign.getPassword().type(this.data.Password)
        cy.get("tr:nth-child(12) td:nth-child(2)") .type(this.data.Confirm)
       cy.get('[colspan="2"] > .button').click()
       cy.get('.title').should("have.text", "Signing up is easy!")
     })

})