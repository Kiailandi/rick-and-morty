/* eslint-env mocha */
import { cy } from 'cypress';

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});
