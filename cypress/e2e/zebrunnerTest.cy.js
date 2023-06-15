import loginPage from "../pages/loginPage"

describe('Zebrunner login tests', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  beforeEach(() => {
    expect(username, 'username was set').to.be.a('string').and.not.be.empty
    if (typeof password !== 'string' || !password) {
      throw new Error('Missing password value, set using CYPRESS_password=...')
    }
    cy.visit("/")
    cy.wait(2000)
  })
    
  it.only('user can log in', () => {
    loginPage.fillCredentials(username, password)
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').click()
    cy.wait(2000)
    cy.get('.page-header').should('contain', 'Projects')
  })

  it('user cant log in with incorrect credential', () => {
    loginPage.fillCredentials('incorrectUsername', 'incorrectPassword')
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('.MuiAlert-message').should('contain', 'We do not recognize that username or password.')
  })

  it('user can log out', () => {
    cy.get('.signin-form__login-button-wrapper > .MuiButtonBase-root').should('be.disabled')
  })
})