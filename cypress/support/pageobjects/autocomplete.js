 
//()  {}  ;
class autocomplete  
{
  getPrimaryNav()
  {
  return cy.get('#genesis-mobile-nav-primary')
  }
 getsubMenu()
 {
   return  cy.get('#menu-item-129 > .sub-menu-toggle')
 }
 getMenuItem()
 {
 return cy.get('#menu-item-126 > a > span')
 }
 getInput() 
 {
 return  cy.get('.ui-autocomplete-input')
 }
 gerTabIndex()
 {

 return cy.get("div[tabindex='-1']")
 }
}
     
   export default autocomplete
 
//()  {}  ;