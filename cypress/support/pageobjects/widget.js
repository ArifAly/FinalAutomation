 class widget
  {
   getPrimary()
   {
   return cy.get('#genesis-mobile-nav-primary')
   }
   getToggle()
   {
   return cy.get('#menu-item-129 > .sub-menu-toggle')
   }
   getSpan()
   {
    return cy.get('#menu-item-127 > a > span')
   }
   getClick1()
   {
    return cy.get('#ui-id-1')
   }
   getClick2()
   {
   return  cy.get('#ui-id-3')
   }
   getClick3()
   {
   return cy.get('#ui-id-5')
   }
   getClick4()
   {
   return cy.get('#ui-id-7')
   }
 }
 export default widget