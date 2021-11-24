class registration {

    getCatalog()
    {
     return cy.get('#Catalog > a')
    }
    getForm()
    {
       return cy.get('#Catalog > form')
    }
    getUserName()
    {
     return cy.get(':nth-child(2) > tbody > :nth-child(1) > :nth-child(2)')
    }
    getPassword()
    {
       return cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2) > input')
    }
    getConfirmPass()
    {
     return cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2) > input')
    }
    getFirstName()
    {
     return cy.get(':nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > input')
    }
    getLastName()
    {
       return cy.get(':nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > input')
    }
    getEmail()
    {
       return cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input')
    }
    getPhoneNumber()
    {
       return cy.get(':nth-child(4) > tbody > :nth-child(4) > :nth-child(2) > input')
    }
    getAddress()
    {
       return cy.get(':nth-child(5) > :nth-child(2) > input')
    }
    getCity()
    {
       return cy.get(':nth-child(6) > :nth-child(2) > input')
    }
   getCity1()
   {
   return cy.get(':nth-child(7) > :nth-child(2) > input')
   }
   getprovince()
   { 
   return cy.get(':nth-child(8) > :nth-child(2) > input')
   }
   getCode2()
   {
   return cy.get(':nth-child(9) > :nth-child(2) > input')
   }
  getCountry()
  {
   return cy.get(':nth-child(10) > :nth-child(2) > input')
  }
  
 
}
export default registration