
class login

{
    getusername()
    {
     return   cy.get('form > :nth-child(2) > .input')
    }
    getpassword()
    {
     return cy.get(':nth-child(4) > .input')   
    }
    getbutton()
    {
       return cy.get(':nth-child(5) > .button')
    }
     

}
export default login
 
