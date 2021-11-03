class LoginPage {

    getUsernameTextBox(){
    return cy.get('#divUsername');
    }
    getPasswordTextBox(){
        return cy.get('#divPassword');
    }
   getLoginButton(){
       return cy.get('.button');
   }
   getError(){
       return cy.get('span[id="spanMessage"]')
   }
}
export default LoginPage;