/* eslint-env mocha */
/* eslint no-undef:0 */

describe('The Home Page', () => {
  it('opens', () => {
    cy.visit('/');
  });

  it('loads the first 20 characters', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character/?page=1').as('getCharactersFirstPage');

    cy.visit('/');

    cy.wait('@getCharactersFirstPage').its('response.statusCode').should('eq', 200);

    cy.get('[data-cy^="cy-character"]')
      .should('be.visible')
      .its('length')
      .should('be.equal', 20);
  });

  it('fetches first 20 characters\' origin and current location', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/location/*').as('getLocation');

    cy.visit('/');

    cy.wait('@getLocation').its('response.statusCode').should('eq', 200);

    cy.get('[data-cy^="cy-location"]')
      .its('length')
      .should('be.equal', 40);
  });

  it('loads second page of characters (20+20) on load more click', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character/?page=2').as('getCharactersSecondPage');

    cy.visit('/');

    cy.get('[data-cy="cy-load-more"]').click();

    cy.wait('@getCharactersSecondPage').its('response.statusCode').should('eq', 200);

    cy.get('*[data-cy^="cy-character-"]')
      .its('length')
      .should('be.equal', 40);
  });
});
