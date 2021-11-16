class formElements{
  getfirstName ()      //()  {}  ;
  {
    return cy.get('#wpforms-49-field_1')
  }
 getlastName()
 {
    return cy.get('#wpforms-49-field_1-last')
 }
 getemail()
 {
   return cy.get('#wpforms-49-field_2')
 }

  getphoneNumber() 

  {
   return cy.get('#wpforms-49-field_4')

  } 
  getJustClick()
  {
   return cy.get('.choice-1 > .wpforms-field-label-inline')
  }
  getSelect()
  {

   return cy.get('#wpforms-49-field_5')
  }
  getFormClick() 
  {
  return  cy.get('#wpforms-submit-49')
  }
  getText()
  {
   return cy.get('#wpforms-confirmation-49 > :nth-child(1)')

  } 
  getPrimary()
  {
   return cy.get('#genesis-mobile-nav-primary')
  }
  getToggle()
  {
  return  cy.get('#menu-item-130 > .sub-menu-toggle')
  }
  getSpan()
  {
  return  cy.get('#menu-item-87 > a > span')
  }
  getTittle()
  {
 return cy.get('.entry-title') 
  }
  getNormalAlert()
  {
   return cy.get('#NormalAlert')
  }
  getCustomAlert()
  {
  return cy.get('#CustomAlert')
  }
  getPromptAlert()
  {
  return cy.get('#PromptAlert')
  }
  getMobile()
  {
  return cy.get('#genesis-mobile-nav-primary')
  }
  getSubMenu()
  {
   return cy.get('#menu-item-130 > .sub-menu-toggle')
  }
  getNewSpan()
  {
   return cy.get('#menu-item-101 > a > span')
  } 
 getEntryTittle()
 {

  return cy.get('.entry-title')

 }
 getLink()
 {

  return cy.get('.wp-block-button__link')
 } 
}
export default formElements 
//()  {}  ;