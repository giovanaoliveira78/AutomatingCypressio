import { ELEMENTS } from '../support/elements/queryingGet.elements'

beforeEach(() => {
  cy.visit("/")
  cy.get(ELEMENTS.link)
    .contains("get")
    .click()
})
describe('Click on the button', () => {
  it('Should click on the button', () => {
    cy.get(ELEMENTS.button)
      .should('be.visible')
      .click
  })
})

describe('Find the list and click the save form button', () => {
  it('Should click on the save form button', () => {
    cy.get(ELEMENTS.saveFormButton)
      .contains('span', 'Save Form')
  })

  it('Should find the words on the list using cy.contains and attribute selector', () => {
    cy.get(ELEMENTS.list)
      .contains('apples')
      .should('have.class', 'first')

    cy.get(ELEMENTS.list)
      .contains('oranges')
      .should('have.class', 'second')

    cy.get(ELEMENTS.list)
      .contains('bananas')
      .should('have.class', 'third')

    cy.get(ELEMENTS.list)
      .contains('more apples')
      .should('have.class', 'fourth')
  })
})