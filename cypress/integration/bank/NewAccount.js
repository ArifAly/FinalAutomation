///<reference types="cypress"/>
import login from "../../support/pageobjects/login"
import newAccount from "../../support/pageobjects/newAcount"
describe('Test suites for Bank System', function()
{
  //Using: Hook Concept
  before(() =>{
    cy.fixture('example').then(function(data)
    {
      this.data=data
    }) 
  })
  // Test: case starts Here 
    it('Test case for Opening new Account for the registered user',function(){
       const logg= new login;
       const newaccount = new newAccount;
       
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
         logg.getusername().type(this.data.Username)
         logg.getpassword().type(this.data.Password) 
         logg.getbutton().click()
          newaccount.getOpenAccount().click()
           newaccount.gettittle().should('have.text', "Open New Account")
          newaccount.gettype().select('SAVINGS') 
          newaccount.getAccountID().select('13899') 
          newaccount.getButton().click()
          newaccount.getScope().should("have.text", "Congratulations, your account is now open.")
   
     })
})