import { getGreeting } from '../support/app.po'

describe('front', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    getGreeting().contains('Learn React')
  })
})
