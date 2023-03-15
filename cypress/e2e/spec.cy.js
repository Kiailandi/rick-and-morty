/* eslint-env mocha */
/* eslint no-undef:0 */

describe('The Home Page', () => {
  it('opens', () => {
    cy.visit('/');
  });

  it('loads the first 20 characters', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1').as('getCharactersFirstPage');

    cy.visit('/');

    cy.wait('@getCharactersFirstPage').its('response.statusCode').should('eq', 200);

    cy.get('*[id^="cy-character-"]')
      .should('be.visible')
      .its('length')
      .should('be.equal', 20);
  });

  it('loads second page of characters (20+20) on load more click', () => {
    cy.visit('/');

    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=2').as('getCharactersSecondPage');

    cy.get('#cy-load-more').click();

    cy.wait('@getCharactersSecondPage').its('response.statusCode').should('eq', 200);

    cy.get('*[id^="cy-character-"]')
      .should('be.visible')
      .its('length')
      .should('be.equal', 40);
  });
});
