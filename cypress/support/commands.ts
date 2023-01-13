declare namespace Cypress {
  interface Chainable <Subject = any> {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to select DOM element by formControlName attribute.
     * @example cy.formControl('email')
     */
    formControl(value: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`)
});

Cypress.Commands.add('formControl', (value) => {
  return cy.get(`[formControlName=${value}]`)
});
