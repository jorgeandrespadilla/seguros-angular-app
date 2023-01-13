import { AppConfig } from '../../src/app/config/app.config';

describe('Authentication', () => {
  it('should login', () => {
    cy.visit(AppConfig.routes.authentication.login.fullPath);
    cy.fixture('user').then((user) => {
      cy.formControl('username').type(user.username);
      cy.formControl('password').type(user.password);
      cy.dataCy('login-button').click();
      cy.url().should('include', AppConfig.routes.home.fullPath);
    });
  });
});
