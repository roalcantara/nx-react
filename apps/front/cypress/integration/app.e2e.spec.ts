import { getGreeting } from '../support/app.po'

describe('front', () => {
  beforeEach(() => cy.visit('/'))

  it('should display the page title', () => {
    getGreeting().contains('Companies')
  })
})
