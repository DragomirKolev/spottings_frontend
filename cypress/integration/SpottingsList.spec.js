  
/// <reference types="cypress" />

describe('Tests spottings list', () => {
    it('Renders with data', () => {
        cy
        .server()
        .route('http://localhost:5001/api/v1/spottings', 'fixture:spottings')
        .as('getSpottings')
        .visit('/')
        .wait('@getSpottings')

        .get('[data-cy="spottingsContainer"]').children().should('have.length', 3);
    });
});