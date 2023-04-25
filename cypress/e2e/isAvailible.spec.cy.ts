describe("service is available", function () {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  it('should open ingredient modal', () => {
    cy.get('[test-id="card"]').first().click();
    cy.get('[id="portal"]').contains('Детали ингредиента');
    cy.get('[id="portal"]').find('button').click();
  })

  it('should button new order disabled', () => {
    cy.get('[test-id="bun-container"]').should('not.exist');
    cy.get('[test-id="constructor"]').find('button').should('have.disabled');
  })

});
