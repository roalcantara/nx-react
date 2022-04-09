import { database } from './database'

describe('#database', () => {
  it('is defined', () => {
    expect(database).toBeDefined()
  })

  describe('#build', () => {
    test.todo('builds a database')

    describe('#companies', () => {
      describe('#entries', () => {
        test.todo('returns a list of Companies')
      })

      describe('#map', () => {
        test.todo('returns a map of Companies')
      })
    })

    describe('#phone_numbers', () => {
      describe('#entries', () => {
        test.todo('returns a list of PhoneNumbers')
      })

      describe('#map', () => {
        test.todo('returns a map of PhoneNumbers')
      })
    })
  })
})
