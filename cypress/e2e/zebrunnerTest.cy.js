describe('Zebrunner tests', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')
  
  beforeEach(() => {
    expect(username, 'username was set').to.be.a('string').and.not.be.empty
    if (typeof password !== 'string' || !password) {
      throw new Error('Missing password value, set using CYPRESS_password=...')
    }
  })
    
  it.only('user can log in', () => {
    cy.visit('https://solvdinternal.zebrunner.com/')
    cy.wait(2000)
    cy.get('#accessKey')
      .type(username, {log: false})
      .should(el$ => {
        if (el$.val() !== username) {
          throw new Error('Different value of typed username')
      }
    })
    cy.get('#password')
      .type(password, {log: false})
      .should(el$ => {
        if (el$.val() !== password) {
          throw new Error('Different value of typed password')
      }
    })
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').click()
    cy.wait(2000)
    cy.get('.page-header').should('contain', 'Projects')
  })

  it('user cant log in with incorrect credential', () => {
    cy.visit('https://solvdinternal.zebrunner.com/')
    cy.wait(2000)
    cy.get('#accessKey')
      .type(username, {log: false})
      .should(el$ => {
        if (el$.val() !== username) {
          throw new Error('Different value of typed username')
      }
    })
    cy.get('#password')
      .type(password, {log: false})
      .should(el$ => {
        if (el$.val() !== password) {
          throw new Error('Different value of typed password')
      }
    })
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('.MuiAlert-message').should('contain', 'We do not recognize that username or password.')
  })

  it('user can log out', () => {
    cy.visit('https://solvdinternal.zebrunner.com/')
    cy.wait(2000)
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').should('be.disabled')
  })
})