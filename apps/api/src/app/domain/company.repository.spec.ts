import { companyRepository } from './company.repository'

describe('#companyRepository', () => {
  it('is defined', () => {
    expect(companyRepository).toBeDefined()
  })

  describe('#get()', () => {
    test.todo('returns a Company')

    describe('when no key is given', () => {
      test.todo('returns undefined')
    })

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#first()', () => {
    test.todo('returns the first Company from datasource')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#findAll()', () => {
    test.todo('returns all Companies')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })
})
