import { phoneNumberRepository } from './phone_number.repository'

describe('#phoneNumberRepository', () => {
  it('is defined', () => {
    expect(phoneNumberRepository).toBeDefined()
  })

  describe('#get()', () => {
    test.todo('returns a PhoneNumber')

    describe('when no key is given', () => {
      test.todo('returns undefined')
    })

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#first()', () => {
    test.todo('returns the first PhoneNumber from datasource')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })

  describe('#findAll()', () => {
    test.todo('returns all PhoneNumbers')

    describe('when datasource is empty', () => {
      test.todo('returns undefined')
    })
  })
})
