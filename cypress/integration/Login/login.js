/// <reference types="cypress" />
import LoginPage from "../../support/pageObjects/LoginPage";
import HomePage from "../../support/pageObjects/HomePage";

const login = new LoginPage;
const homePage =new HomePage;

before(function() {
  cy.fixture('testdata').then(function(testdata) {
    this.testdata = testdata
  })
})

Given('I navigate to the website',()=>{
  cy.visit('/')
  cy.log("Navigated to website")
})

When('I Enter Username {string} and Password {string} for a user',(username,password)=>{
  login.getUsernameTextBox().type(username)
  login.getPasswordTextBox().type(password)
})

And('I click login button',()=>{
login.getLoginButton().click()
})

Then('I land on Homepage',()=>{
 homePage.getTitle().should('have.text',"Dashboard")
})

Then('I validate Error Message',()=>{
login.getError().should('be.visible')
login.getError().should('have.text','Invalid credentials')
})

When('I enter username and password for a user',function(){
  login.getUsernameTextBox().type(this.testdata.username)
  login.getPasswordTextBox().type(this.testdata.Password) 
})