import '@4tw/cypress-drag-drop';

describe("service is available", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-burger');
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

  it('should drag and drop ingredients', () => {
    cy.get('[test-id="card"]').as('ingredient');
    cy.get('[test-id="constructor"]').as('order-constructor');

    cy.get('@ingredient').eq(0).drag('@order-constructor');
    cy.get('@ingredient').eq(3).drag('@order-constructor');
    cy.get('@ingredient').eq(5).drag('@order-constructor');
    cy.get('@ingredient').eq(8).drag('@order-constructor');
  })

  it('should delete ingredient in constructor', () => {
    cy.get('[test-id="card"]').as('ingredient');
    cy.get('[test-id="constructor"]').as('order-constructor');

    cy.get('@ingredient').eq(0).drag('@order-constructor');
    cy.get('@ingredient').eq(3).drag('@order-constructor');
    cy.get('@ingredient').eq(4).drag('@order-constructor');
    cy.get('[class^="constructor-element__action"]').eq(1).click();
  })

  it('should added new order and login user', () => {
    cy.get('[test-id="card"]').as('ingredient');
    cy.get('[test-id="constructor"]').as('order-constructor');
    cy.get('[id="portal"]').as('modal');

    cy.get('@ingredient').eq(0).drag('@order-constructor');
    cy.get('@ingredient').eq(3).drag('@order-constructor');
    cy.get('@ingredient').eq(4).drag('@order-constructor');
    cy.get('[test-id="constructor"]').find('button')
      .contains('Оформить заказ')
      .click();

    cy.get('[type="email"]').type('wood@mmm.ru');
    cy.get('[type="password"]').type('1234');
    cy.get('button').contains('Войти').click();

    cy.get('@order-constructor').find('button')
    .contains('Оформить заказ')
    .click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting, testing-library/await-async-utils
    cy.wait(20000).get('@modal').contains('идентификатор заказа');
    cy.get('@modal').find('button').click();
    cy.get('[test-id="bun-container"]').should('not.exist');
  })
});
