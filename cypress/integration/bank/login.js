///<reference types="cypress"/>
  import login from "../../support/pageobjects/login"
describe('Test suites for Bank System', function()
{
  before(() =>{
    cy.fixture('example').then(function(data)
    {
      this.data=data
    }) 
  })
  
    it('Test case for the login system after signup',function(){
       const logg= new login;
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
         logg.getusername().type(this.data.Username)
         logg.getpassword().type(this.data.Password) 
         logg.getbutton().click()
          cy.get('.smallText').should("have.text", "Welcome Arif Ali")
     })
})