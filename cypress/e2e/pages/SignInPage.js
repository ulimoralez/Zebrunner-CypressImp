const ProjectsPage = require("./ProjectsPage");

class SignInPage{

    elements = {
        emailField: () => cy.get("input#accessKey"),

        passwordField: () => cy.get("input#password"),

        logInButton: () => cy.get("button.css-1obwva5")
    }

    navigate(){
        cy.visit(Cypress.env('zebrunnerBaseUrl'));

        return this;
    }

    logIn(){
        this.elements.emailField().type(Cypress.env("loginZebrunner").username, {force : true});
        this.elements.passwordField().type(Cypress.env("loginZebrunner").password, {force : true});
        this.elements.logInButton().first().click({force : true});
    }
}

module.exports =  new SignInPage();