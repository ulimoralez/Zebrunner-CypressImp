const ProjectsPage = require("./pages/ProjectsPage");
const SignInPage = require("./pages/SignInPage")

describe('first launcher test', () => {

  beforeEach("Open main", ()=>{
    SignInPage.navigate();
    SignInPage.logIn();
})


  it('logs into the projects page', () => {
      cy.pause();
      ProjectsPage.goToAlpha();
  })
})