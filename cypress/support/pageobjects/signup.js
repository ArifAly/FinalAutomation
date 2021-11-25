class signup
 {

    getFirstname()
    {
      return  cy.get("tr:nth-child(1) td:nth-child(2)") 
    }
 
    getLastName()
    {
     return   cy.get("tr:nth-child(2) td:nth-child(2)")
    }
    getAddress()
    {
     return  cy.get("tr:nth-child(3) td:nth-child(2)") 
    }
    getCity() 
    {
     return cy.get("tr:nth-child(4) td:nth-child(2)")
    }
    getState()
    {
       return cy.get("tr:nth-child(5) td:nth-child(2)") 
    }
    getZipCode()
    {
     return cy.get("tr:nth-child(6) td:nth-child(2)") 
    }
    getPhoneNumber()
    {
      return cy.get("tr:nth-child(7) td:nth-child(2)")
    }
    getSSN()
    {
      return  cy.get("tr:nth-child(8) td:nth-child(2)")
    }
    getUserName()
    {
     return  cy.get("tr:nth-child(10) td:nth-child(2)") 
    }
    getPassword()
    {
      return cy.get("tr:nth-child(11) td:nth-child(2)")  
    }
    getConfirmPassword()
    {
        cy.get("tr:nth-child(12) td:nth-child(2)") 
    }

}
export default signup