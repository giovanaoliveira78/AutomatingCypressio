import { ELEMENTS } from '../support/elements/queryingGet.elements'

before(() => {
  cy.visit("/")
})
describe('Click on the button', () => {
  it('Should click on the button', () => {
    cy.get(ELEMENTS.link)
      .contains("get")
      .click()
    cy.get(ELEMENTS.button)
      .should('be.visible')
      .click
  })
})