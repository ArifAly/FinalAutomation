class newAcount 
{
 getOpenAccount()
 {
   return cy.get('#leftPanel > ul > :nth-child(1) > a')
 }
 gettittle()
 {
    return cy.get('.title')
 }
 gettype()
 {
  return  cy.get('#type')
 }
 getAccountID()
 {
     return cy.get('#fromAccountId')
 }
 getButton()
 {
    return cy.get('form.ng-valid > div > .button')
 }
 getScope()
 {
  return cy.get('.ng-scope > :nth-child(2)')
 }

}
export default newAcount