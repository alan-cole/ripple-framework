import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then(`the ripple map component should be visible`, () => {
  cy.get(`.rpl-map canvas`).should('be.visible')
})

Then(`the data map component tabs should exist`, () => {
  cy.get('.rpl-tabs').should('exist')
})

Then(`the data map tabs should be labelled:`, (dataTable) => {
  const items = dataTable.raw()
  cy.get('.rpl-tabs .rpl-tab .rpl-button__label').as('items')
  items.forEach((row, i: number) => {
    cy.get('@items')
      .eq(i)
      .then((item) => {
        cy.wrap(item).as('item')
        cy.get('@item').should('contain', row[0])
      })
  })
})

When(`I click the tab labelled {string}`, (label) => {
  cy.get('.rpl-tabs .rpl-tab .rpl-button__label').contains(label).click()
})

When(`I enter the term {string} into the location search input`, (term) => {
  cy.get('#tide-address-lookup').click()
  cy.get('#tide-address-lookup').focus()
  cy.get('#tide-address-lookup').type(term)
  cy.get('.rpl-search-bar__menu-option').should('be.visible')
})
Then(`the location search results should contain {string}`, (term) => {
  cy.get('.tide-search-address-lookup .rpl-search-bar__menu-option')
    .contains(term)
    .should('exist')
})
When(`I click the location search term {string}`, (term) => {
  cy.get('.tide-search-address-lookup .rpl-search-bar__menu-option')
    .contains(term)
    .click()
})
