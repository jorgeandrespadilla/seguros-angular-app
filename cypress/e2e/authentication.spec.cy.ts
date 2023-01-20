import { AppConfig } from '../../src/app/config/app.config';

describe('Authentication', () => {
  it('should login as executive', () => {
    cy.visit(AppConfig.routes.authentication.login.fullPath);
    cy.fixture('user').then((users) => {
      const user = users.executive;
      cy.formControl('username').type(user.username);
      cy.formControl('password').type(user.password);
      cy.dataCy('login-button').click();
      cy.url().should('include', AppConfig.routes.home);
      cy.dataCy('add-application-button').should('not.exist');
    });
  });

  it('should login as employee', () => {
    cy.visit(AppConfig.routes.authentication.login.fullPath);
    cy.fixture('user').then((users) => {
      const user = users.employee;
      cy.formControl('username').type(user.username);
      cy.formControl('password').type(user.password);
      cy.dataCy('login-button').click();
      cy.url().should('include', AppConfig.routes.home);
      cy.dataCy('add-application-button').should('exist');
    });
  });
});
