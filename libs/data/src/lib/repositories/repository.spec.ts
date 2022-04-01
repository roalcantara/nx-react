import { Repository } from './repository'

describe('#Repository', () => {
  it('is defined', () => {
    expect(Repository).toBeDefined()
  })

  describe('#get()', () => {
    test.todo('returns a entity')

    describe('when no key is given', () => {
      test.todo('returns undefined')
    })

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#first()', () => {
    test.todo('returns the first entity from datasource')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#findAll()', () => {
    test.todo('returns all entities')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })
})
