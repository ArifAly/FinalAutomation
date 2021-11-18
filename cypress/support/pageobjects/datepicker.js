 
//()  {}  ;
 class dateepicker 
 {
  getmobile() 
  {
   return cy.get('#genesis-mobile-nav-primary')
  }
  getToggle()
  {
   return cy.get('#menu-item-129 > .sub-menu-toggle')
  }
    getItem() 
    {
     return cy.get('#menu-item-129 > .sub-menu-toggle')
    }
    getdateepicker()
    {

     return cy.get('#datepicker')
    }
    getChild()
    {
    return cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default')
    }
 }
    export default dateepicker   
 
 
//()  {}  ;