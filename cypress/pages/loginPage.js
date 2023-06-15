class loginPage{

  elements ={
    
    usernameInput : () => cy.get('#accessKey'),

    passwordInput : () => cy.get('#password')

    }

    fillCredentials(username, password){
    this.elements.usernameInput()
      .type(username, {log: false})
      .should(el$ => {
        if (el$.val() !== username) {
          throw new Error('Different value of typed username')
      }
    })

    this.elements.passwordInput()
      .type(password, {log: false})
      .should(el$ => {
        if (el$.val() !== password) {
          throw new Error('Different value of typed password')
      }
    })
  }
}

module.exports = new loginPage();