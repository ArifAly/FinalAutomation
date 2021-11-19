/// <reference types="cypress"/> 
 import registration from "../../support/pageobjects/registration"

describe('Test Suite for JpetStore', function() {

    it('First test case' ,  function () {
        const reg = new registration();
         cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=')
          reg.getCatalog().click()
          reg.getForm().click()
          reg.getUserName().type('10500')
          reg.getPassword().type('Nothing123')
          reg.getConfirmPass().type('Nothing123')
          reg.getFirstName().type('Kashif')
          reg.getLastName().type('Ali')
          reg.getEmail().type('kashif4545@gmail.com')
          reg.getPhoneNumber().type('03369167046')
          reg.getAddress().type('Rawalpindi Punjab')
          reg.getCity1().type('Chitral, Kpk')
          reg.getCity().type('Rawalpindi')
          reg.getprovince().type('Punjab')
          reg.getCode2().type('8050')
          reg.getCountry().type('Pak')
          
        })
})