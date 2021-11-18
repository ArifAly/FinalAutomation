/// <reference types="cypress"/> 
 

describe('Test Suite for JpetStore', function() {

    it('First test case' ,  function () {
         cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
         cy.get('#Catalog > a').click()
         cy.get('#Catalog > form').click()
         cy.get(':nth-child(2) > tbody > :nth-child(1) > :nth-child(2)').type('10500')
         cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2) > input').type('Nothing123')
         cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2) > input').type('Nothing123')
         cy.get(':nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > input').type('Kashif')
         cy.get(':nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > input').type('Ali')
         cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').type('kashif4545@gmail.com')
         cy.get(':nth-child(4) > tbody > :nth-child(4) > :nth-child(2) > input').type('03369167046')
         cy.get(':nth-child(5) > :nth-child(2) > input').type('Rawalpindi Punjab')
         cy.get(':nth-child(6) > :nth-child(2) > input').type('Chitral, Kpk')
         cy.get(':nth-child(7) > :nth-child(2) > input').type('Rawalpindi')
         cy.get(':nth-child(8) > :nth-child(2) > input').type('Punjab')
         cy.get(':nth-child(9) > :nth-child(2) > input').type('8050')
         cy.get(':nth-child(10) > :nth-child(2) > input').type('Pak')
         cy.get(':nth-child(6) > tbody > :nth-child(1) > :nth-child(1)').click()
         cy.get(':nth-child(6) > tbody > :nth-child(1) > :nth-child(2)').click()
         cy.get("cy.get(':nth-child(1) > :nth-child(2) > select')").select(2).should('have.value', 'japanese').click()
        

        })
        

})