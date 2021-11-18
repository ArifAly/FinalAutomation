class interaction {
   getprimary()
   {
    return  cy.get('#genesis-mobile-nav-primary') 
   }
   getToggle()
   {
    return  cy.get('#menu-item-131 > .sub-menu-toggle')
   }
   getSpan()
   {
    return cy.get('#menu-item-124 > a > span')
   }
   getTittle()
   {
     return cy.get('.entry-title')
   }
   getChild()
   {
     return cy.get('#selectable > :nth-child(3)')
   }
}
export default interaction